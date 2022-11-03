import React, { FC } from 'react';
import type { ArticleInterface } from 'types/ArticleInterface';
import { v4 as uuid } from 'uuid';
import style from './Tags.module.scss';

type TagsProps = Pick<ArticleInterface, 'tagList'>;

export const Tags: FC<TagsProps> = ({ tagList }) => {
  return (
    <ul className={style.tag_list}>
      {tagList.map((tag) => (
        <li className={style.tag} key={uuid()}>
          {tag}
        </li>
      ))}
    </ul>
  );
};
