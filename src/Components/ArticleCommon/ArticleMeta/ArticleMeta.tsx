import React, { FC } from 'react';
import { Button } from 'ui-kit/Button';
import { PostInfo } from './PostInfo';
import style from './ArticleMeta.module.scss';

interface ArticleMetaProps {}

export const ArticleMeta: FC<ArticleMetaProps> = () => {
  return (
    <div className={style.articleMeta}>
      <span className={style.user}>{/* <PostInfo display="column" /> */}</span>
      <span className={style.btn}>
        <Button destination="follow">Follow Magda Parry</Button>
      </span>
      <span className={style.btn}>
        <Button destination="like">Favorite Article(68)</Button>
      </span>
    </div>
  );
};
