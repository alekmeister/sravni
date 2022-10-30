import React, { FC } from 'react';
import cn from 'classnames';
import { AuthorInterface } from 'types/AuthorInterface';
import style from 'Components/ArticleCommon/ArticleMeta/PostInfo/PostInfo.module.scss';

interface PostInfoProps {
  display?: 'line' | 'column';
  author: AuthorInterface;
  date: string;
}

export const PostInfo: FC<PostInfoProps> = ({ display = 'column', author, date }) => {
  const { image, username } = author;
  const displayDate = new Date(Date.parse(date));
  const isLine = display === 'line';

  return (
    <div className={style.userInfo}>
      <img className={style.userIcon} src={image} alt="userImg" />
      <div className={cn(style.info, { [style.info_line]: isLine })}>
        <span className={style.userName}>{username}</span>
        <span className={style.date}>{displayDate.toLocaleDateString()}</span>
      </div>
      <div />
    </div>
  );
};
