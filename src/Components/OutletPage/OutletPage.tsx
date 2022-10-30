import React, { FC } from 'react';
import { Header } from 'Components/Header';
import { Outlet } from 'react-router-dom';
import style from './OutletPage.module.scss';

interface OutletPageProps {}

export const OutletPage: FC<OutletPageProps> = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
      </div>
      <Outlet />
    </>
  );
};
