import React, { FC } from 'react';
import style from 'Components/Header/Header.module.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <nav className={style.header}>
      <Link to="/" className={style.logo}>
        conduit
      </Link>
      <ul className={style.auth}>
        <Link to="/" className={style.nav_item}>
          Home
        </Link>
        <Link to="login" className={style.nav_item}>
          Sign in
        </Link>
        <Link to="registration" className={style.nav_item}>
          Sign up
        </Link>
      </ul>
    </nav>
  );
};
