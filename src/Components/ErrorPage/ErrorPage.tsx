import React, { FC } from 'react';
import style from './ErrorPage.module.scss';

export const ErrorPage: FC = () => {
  return (
    <div className={style.errorPage}>
      <h1 className={style.error}>Этой странички не существует, пока что...</h1>
    </div>
  );
};
