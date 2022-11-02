import React, { FC } from 'react';
import { ReactComponent as Loader } from 'assets/preloader/preloader.svg';
import style from './Preloader.module.scss';

export const Preloader: FC = () => {
  return (
    <div className={style.preloader}>
      <Loader />
    </div>
  );
};
