import React, { FC, useRef, useState } from 'react';
import style from 'components/Header/Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthedUser, useAuth } from 'hooks/use-auth';
import { Menu, MenuItem } from '@mui/material';
import { useAppDispatch } from 'store/types';
import { logOut } from 'store/auth/slice';

export const Header: FC = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAuth();

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
    navigate('/sravni');
  };

  return (
    <nav className={style.header}>
      <Link to="/sravni" className={style.logo}>
        conduit
      </Link>
      <ul className={style.auth}>
        <Link to="/sravni" className={style.nav_item}>
          Home
        </Link>
        {isAuthedUser(user) ? (
          <>
            <Link to="editor" className={style.nav_item}>
              New Article
            </Link>
            <Link to="settings" className={style.nav_item}>
              Settings
            </Link>
            <button className={style.nav_item} onClick={handleClick} ref={ref}>
              <img className={style.user_icon} src={user.image} alt="user_icon" />
              {user.username}
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
