import React, { FC, useRef, useState } from 'react';
import style from 'Components/Header/Header.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import { Menu, MenuItem } from '@mui/material';
import { useAppDispatch } from 'store/types';
import { logOut } from 'store/auth/slice';

export const Header: FC = () => {
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  const { username, isAuth, image } = useAuth();

  const [isOpenMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!isOpenMenu);
  };
  const handleCloseModal = () => {
    setOpenMenu(false);
  };
  const handleLogOut = () => {
    dispatch(logOut());
    setOpenMenu(false);
  };

  return (
    <nav className={style.header}>
      <Link to="/" className={style.logo}>
        conduit
      </Link>
      <ul className={style.auth}>
        <Link to="/" className={style.nav_item}>
          Home
        </Link>
        {isAuth ? (
          <>
            <Link to="editor" className={style.nav_item}>
              New Article
            </Link>
            <Link to="settings" className={style.nav_item}>
              Settings
            </Link>
            <button className={style.nav_item} onClick={handleClick} ref={ref}>
              <img className={style.user_icon} src={image} alt="user_icon" />
              {username}
            </button>
            <Menu anchorEl={ref.current} open={isOpenMenu} onClose={handleCloseModal}>
              <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Link to="login" className={style.nav_item}>
              Sign in
            </Link>
            <Link to="registration" className={style.nav_item}>
              Sign up
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};
