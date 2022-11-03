import React, { FC } from 'react';
import { Button } from 'ui-kit/Button';
import type { AuthorInterface } from 'types/AuthorInterface';
import { PostInfo } from './PostInfo';
import style from './ArticleMeta.module.scss';

interface ArticleMetaProps {
  author: AuthorInterface;
  date: string;
}

export const ArticleMeta: FC<ArticleMetaProps> = ({ author, date }) => {
  return (
    <div className={style.articleMeta}>
      <span className={style.user}>
        <PostInfo display="column" date={date} author={author} />
      </span>
      <span className={style.btn}>
        <Button destination="follow">Follow {author.username}</Button>
      </span>
      <span className={style.btn}>
        <Button destination="like">Favorite Article</Button>
      </span>
    </div>
  );
};
