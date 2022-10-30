import React, { FC } from 'react';
import { ArticleMeta } from 'Components/ArticleCommon/ArticleMeta';
import style from './ArticleBanner.module.scss';

interface ArticleBannerProps {}

export const ArticleBanner: FC<ArticleBannerProps> = () => {
  return (
    <article className={style.articleBanner}>
      <div className={style.container}>
        <h1 className={style.title}>
          Repellat nihil in magnam quasi. Et dicta at est laborum doloribus sit. Quia possimus necessitatibus magnam, est, nulla, reiciendis exercitationem neque et tenetur quia deserunt asperiores blanditiis doloribus ipsum beatae numquam. Ullam
          rerum consequuntur occaecati error. Possimus consequatur consectetur doloribus voluptate nihil, tenetur sunt fugiat quae id, ducimus non.
        </h1>
        <ArticleMeta />
      </div>
    </article>
  );
};
