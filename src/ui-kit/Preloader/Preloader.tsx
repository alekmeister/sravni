import React, { FC } from 'react';
import { ReactComponent as Loader } from 'assets/preloader/preloader.svg';
import style from './Preloader.module.scss';

interface PreloaderProps {}

export const Preloader: FC<PreloaderProps> = () => {
  return (
    <div className={style.preloader}>
      <Loader />
    </div>
  );
};
