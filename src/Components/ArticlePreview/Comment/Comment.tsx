import React, { FC } from 'react';
import { PostInfo } from 'Components/ArticleCommon/ArticleMeta/PostInfo';
import style from './Comment.module.scss';

interface CommentProps {}

export const Comment: FC<CommentProps> = () => {
  return (
    <article className={style.comment}>
      <p className={style.text}>Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.</p>
      <aside className={style.author}>{/* <PostInfo display="line" /> */}</aside>
    </article>
  );
};
