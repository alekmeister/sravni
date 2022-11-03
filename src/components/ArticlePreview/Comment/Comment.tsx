import React, { FC } from 'react';
import { PostInfo } from 'components/ArticleCommon/ArticleMeta/PostInfo';
import type { AuthorInterface } from 'types/AuthorInterface';
import style from './Comment.module.scss';

interface CommentProps {
  body: string;
  author: AuthorInterface;
  date: string;
}

export const Comment: FC<CommentProps> = ({ body, author, date }) => {
  return (
    <article className={style.comment}>
      <p className={style.text}>{body}</p>
      <aside className={style.author}>
        <PostInfo display="line" author={author} date={date} />
      </aside>
    </article>
  );
};
