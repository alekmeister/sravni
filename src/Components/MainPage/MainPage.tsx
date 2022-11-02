import React, { FC, useEffect, useState } from 'react';
import { Banner } from 'Components/Banner';
import { useAppDispatch, useAppSelector } from 'store/types';
import { getArticles } from 'store/mainPage/articles/actionCreators/getArticles';
import { Article } from 'Components/Feed/Article';
import { getPopularTags } from 'store/mainPage/articles/actionCreators/getPopularTags';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { Preloader } from 'ui-kit/Preloader';
import { Pagination } from '@mui/material';
import { v4 as uuid } from 'uuid';
import cn from 'classnames';
import { useAuth } from 'hooks/use-auth';
import style from './MainPage.module.scss';

export const MainPage: FC = () => {
  const [pageQty, setPageQty] = useState(1);
  const [page, setPage] = useState(1);
  const [activeTag, setActiveTag] = useState('');
  // Почему status ?
  const { status: articlesLoadingStatus, articles, articlesCount } = useAppSelector((state) => state.articles);

  const { status: tagsLoadingStatus, popularTags } = useAppSelector((state) => state.tags);
  const isLoadingArticles = articlesLoadingStatus === REQUEST_STATUS.LOADING;
  const isLoadingTags = tagsLoadingStatus === REQUEST_STATUS.LOADING;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticles({ offset: Number(`${page - 1}${0}`), limit: 10, tag: activeTag }));
    window.scrollTo(0, 0);
  }, [page, activeTag]);

  useEffect(() => {
    dispatch(getPopularTags());
  }, []);

  useEffect(() => {
    setPageQty(Math.ceil(articlesCount / 10));
  }, [articlesCount]);

  return (
    <>
      {useAuth().isAuth ? null : <Banner />}
      <div className={style.container}>
        <div className={style.feedMain}>
          <div className={style.feeds}>
            <ul className={style.toggle_list}>
              <li className={cn(style.toggle, { [style.toggle_active]: !activeTag })} onClick={() => setActiveTag('')}>
                Global Feed
              </li>
              {activeTag ? <li className={cn(style.toggle, { [style.toggle_active]: activeTag })}>{activeTag}</li> : null}
            </ul>
            {isLoadingArticles && <Preloader />}
            <Article articles={articles} />
            <div className={style.pagination}>
              <Pagination size="large" count={pageQty} page={page} onChange={(_, num) => setPage(num)} />
            </div>
          </div>
          <div className={style.sidebar}>
            <div className={style.tags_wrapper}>
              <p>Popular Tags</p>
              {isLoadingTags && <Preloader />}
              <ul className={style.tag_list}>
                {popularTags.map((tag) => (
                  <li
                    className={cn(style.tag, { [style.tag_active]: activeTag === tag })}
                    key={uuid()}
                    onClick={() => {
                      setActiveTag(tag);
                      setPage(1);
                    }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
