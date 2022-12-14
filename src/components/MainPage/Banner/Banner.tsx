import React, { FC } from 'react';
import style from 'components/MainPage/Banner/Banner.module.scss';

export const Banner: FC = () => {
  return (
    <section className={style.banner}>
      <h1 className={style.title}>conduit</h1>
      <p className={style.description}>A place to share your knowledge</p>
    </section>
  );
};
