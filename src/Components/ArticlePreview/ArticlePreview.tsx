import React, { FC } from 'react';
import style from 'Components/ArticlePreview/ArticlePreview.module.scss';
import { ArticleBanner } from 'Components/ArticlePreview/ArticleBanner';
import { Tags } from 'Components/ArticleCommon/Tags';
import { ArticleMeta } from 'Components/ArticleCommon/ArticleMeta';
import { PostInfo } from 'Components/ArticleCommon/ArticleMeta/PostInfo';
import { Comment } from 'Components/ArticlePreview/Comment';

interface ArticlePreviewProps {}

export const ArticlePreview: FC<ArticlePreviewProps> = () => {
  return (
    <div className={style.articlePreview}>
      <ArticleBanner />
      <div className={style.description}>
        <p className={style.text}>
          Iusto laborum aperiam neque delectus consequuntur provident est maiores explicabo. Laborum est maxime enim accusantium magnam.\nRerum dolorum minus laudantium delectus eligendi necessitatibus quia.\nDeleniti consequatur explicabo aut nobis
          est vero tempore.\nExcepturi earum quo quod voluptatem quo iure vel sapiente occaecati.\nConsectetur consequatur corporis doloribus omnis harum voluptas esse amet. Eveniet sit ipsa officiis laborum.\nIn vel est omnis sed impedit quod
          magni.\nDignissimos quis illum qui atque aut ut quasi sequi. Laborum itaque quos provident.\nRerum cupiditate praesentium amet voluptatem dolor impedit modi dicta.\nVoluptates assumenda optio est.\nNon aperiam nam consequuntur vel a commodi
          dicta incidunt. Blanditiis non quos aut dolore nulla unde.\nIncidunt repudiandae amet eius porro.\nTempora unde sapiente repellat voluptatem omnis et ut omnis in.\nEt pariatur odit qui minima perspiciatis non dolores. Maiores assumenda
          porro est ea necessitatibus qui qui dolorum.\nVelit suscipit ut ipsam odit aut earum. Non natus nihil. Doloribus temporibus dolorum placeat.\nFugit nulla quaerat.\nEveniet ratione odit sed non rerum.\nNemo tempore eveniet veritatis alias
          repellat et.\nVoluptas nisi quis commodi id. Animi enim quo deserunt.\nAmet facilis at laboriosam.\nRerum assumenda harum et sapiente suscipit ipsa fugiat.\nSunt ut aut rem expedita consequatur optio.\nRecusandae tenetur rerum quos culpa.
          Et fuga repellendus magnam dignissimos eius aspernatur rerum.
        </p>
        {/* <Tags /> */}
      </div>
      <div className={style.meta}>
        <ArticleMeta />
      </div>
      <div className={style.comments}>
        <div className={style.container}>
          <Comment />
        </div>
        <div className={style.container}>
          <Comment />
        </div>
      </div>
    </div>
  );
};
