import React, { FC, useEffect } from 'react';
import style from 'components/ArticlePreview/ArticlePreview.module.scss';
import { Tags } from 'components/ArticleCommon/Tags';
import { ArticleMeta } from 'components/ArticleCommon/ArticleMeta';
import { Comment } from 'components/ArticlePreview/Comment';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/types';
import { getComments } from 'store/comments/actionCreators/getComments';
import { getArticlePreview } from 'store/articlePreview/actionCreators/getArticlePreview';
import { selectArticlePreview, selectArticlePreviewRequestStatus } from 'store/articlePreview';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { Preloader } from 'ui-kit/Preloader';
import { selectComments, selectCommentsRequestState } from 'store/comments';

export const ArticlePreview: FC = () => {
  const { qrySlug = '' } = useParams();

  const { title, tagList = [], author, body, updatedAt } = useAppSelector(selectArticlePreview);
  const articleRequestStatus = useAppSelector(selectArticlePreviewRequestStatus);
  const commentsRequestStatus = useAppSelector(selectCommentsRequestState);

  const isLoadingData = [articleRequestStatus, commentsRequestStatus].some((el) => el === REQUEST_STATUS.LOADING);

  const comments = useAppSelector(selectComments);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticlePreview({ slug: qrySlug }));
    dispatch(getComments({ slug: qrySlug }));
    window.scrollTo(0, 0);
  }, [qrySlug]);

  if (isLoadingData) {
    return <Preloader />;
  }

  return (
    <div className={style.articlePreview}>
      <article className={style.articleBanner}>
        <div className={style.container_banner}>
          <h1 className={style.title}>{title}</h1>
          <ArticleMeta author={author} date={updatedAt} />
        </div>
      </article>
      <div className={style.description}>
        <p className={style.body}>{body}</p>
        <Tags tagList={tagList} />
      </div>
      <div className={style.meta}>
        <ArticleMeta author={author} date={updatedAt} />
      </div>
      <div className={style.comments}>
        <div className={style.container_comments}>
          {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
          {comments.map(({ author, updatedAt, body, id }) => (
            <div key={id}>
              <Comment date={updatedAt} author={author} body={body} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
