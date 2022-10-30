import React, { FC } from 'react';
import { Button } from 'ui-kit/Button';
import style from './Auth.module.scss';

interface AuthProps {
  typeAuth: 'login' | 'registration';
}

const login = {
  title: 'Sign in',
  link: 'Need an account?',
  fields: ['Email', 'Password'],
};
const registration = {
  title: 'Sign up',
  link: 'Have an account?',
  fields: ['UserName', 'Email', 'Password'],
};

export const Auth: FC<AuthProps> = ({ typeAuth }) => {
  const isLogin = typeAuth === 'login' ? login : registration;
  return (
    <div className={style.auth}>
      <div className={style.container}>
        <h1 className={style.title}>{isLogin.title}</h1>
        <span className={style.link}>{isLogin.link}</span>
        {isLogin.fields.map((field) => (
          <input className={style.field} placeholder={field} />
        ))}
        <div className={style.btn}>
          <Button destination="empty">Sing in</Button>
        </div>
      </div>
    </div>
  );
};
