import React, { FC } from 'react';
import { Header } from 'components/Header';
import { Outlet } from 'react-router-dom';
import style from './OutletPage.module.scss';

export const OutletPage: FC = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
      </div>
      <Outlet />
    </>
  );
};
