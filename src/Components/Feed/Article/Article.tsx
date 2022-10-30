import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';
import { PostInfo } from 'Components/ArticleCommon/ArticleMeta/PostInfo';
import { Button } from 'ui-kit/Button';
import { Tags } from 'Components/ArticleCommon/Tags';
import { ArticleInterface } from 'types/ArticleInterface';
import style from './Article.module.scss';

interface ArticleProps {
  articles: ArticleInterface[];
}

export const Article: FC<ArticleProps> = ({ articles }) => {
  return (
    <>
      {articles.map(({ favoritesCount, createdAt, author, tagList, body, description }) => (
        <article className={style.article} key={uuid()}>
          <div className={style.header}>
            <PostInfo display="column" author={author} date={createdAt} />
            <Button destination="like"> {favoritesCount}</Button>
          </div>
          <h1 className={style.content}>{body}</h1>
          <p className={style.description}>{description}</p>
          <div className={style.footer}>
            <span style={{ cursor: 'pointer' }}>Read more...</span>
            <Tags tagList={tagList} />
          </div>
        </article>
      ))}
    </>
  );
};
