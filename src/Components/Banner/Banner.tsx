import React, { FC } from 'react';
import style from 'Components/Banner/Banner.module.scss';

interface BannerProps {}

export const Banner: FC<BannerProps> = () => {
  return (
    <section className={style.banner}>
      <h1 className={style.title}>conduit</h1>
      <p className={style.description}>A place to share your knowledge</p>
    </section>
  );
};
