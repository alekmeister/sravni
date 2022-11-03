import React, { FC } from 'react';
import cn from 'classnames';
import type { AuthorInterface } from 'types/AuthorInterface';
import style from 'components/ArticleCommon/ArticleMeta/PostInfo/PostInfo.module.scss';
import icon from 'assets/images/1.sm.webp';

interface PostInfoProps {
  display?: 'line' | 'column';
  author: AuthorInterface;
  date: string;
}

export const PostInfo: FC<PostInfoProps> = ({ display = 'column', author = { image: icon, username: 'username' }, date }) => {
  const displayDate = new Date(Date.parse(date));
  const isLine = display === 'line';

  return (
    <div className={style.userInfo}>
      <img className={style.userIcon} src={author.image} alt="userImg" />
      <div className={cn(style.info, { [style.info_line]: isLine })}>
        <span className={style.userName}>{author.username}</span>
        <span className={style.date}>{displayDate.toLocaleDateString()}</span>
      </div>
      <div />
    </div>
  );
};
