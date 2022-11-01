import React, { FC, useEffect, useState } from 'react';
import { Button } from 'ui-kit/Button';
import { useAppDispatch, useAppSelector } from 'store/types';
import { postLogin } from 'store/auth/actionCreators/postLogin';
import { useNavigate } from 'react-router-dom';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { useAuth } from 'hooks/use-auth';
import { v4 as uuid } from 'uuid';
import style from './Auth.module.scss';

interface AuthProps {
  typeAuth: 'login' | 'registration';
}

interface authFields {
  title: string;
  link: string;
  fields: { type: string; placeholder: string; handleChange: (arg: string) => void }[];
}

export const Auth: FC<AuthProps> = ({ typeAuth }) => {
  const statusLogin = useAppSelector((state) => state.user.status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login: authFields = {
    title: 'Sign in',
    link: 'Need an account?',
    fields: [
      {
        type: 'email',
        placeholder: 'Email',
        handleChange: setEmail,
      },
      {
        type: 'password',
        placeholder: 'Password',
        handleChange: setPassword,
      },
    ],
  };
  const registration: authFields = {
    title: 'Sign up',
    link: 'Have an account?',
    fields: [
      { type: 'text', placeholder: 'Username', handleChange: setUsername },
      {
        type: 'email',
        placeholder: 'Email',
        handleChange: setEmail,
      },
      {
        type: 'password',
        placeholder: 'Password',
        handleChange: setPassword,
      },
    ],
  };
  // console.log(username);
  const handleLogin = () => {
    dispatch(postLogin({ user: { username, email, password } }));
  };

  if (statusLogin === REQUEST_STATUS.SUCCESS) {
    navigate('/');
  }
  const { title, link, fields } = typeAuth === 'login' ? login : registration;
  return (
    <div className={style.auth}>
      <div className={style.container}>
        <h1 className={style.title}>{title}</h1>
        <span className={style.text}>{link}</span>
        {/* {fields.map(({ type, handleChange, placeholder }) => ( */}
        {/*  <input className={style.field} type={type} placeholder={placeholder} key={uuid()} onChange={(e) => setUsername(e.target.value)} /> */}
        {/* ))} */}
        <input className={style.field} type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className={style.field} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className={style.field} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <div className={style.btn} onClick={() => handleLogin()}>
          <Button destination="empty">{title}</Button>
        </div>
      </div>
    </div>
  );
};
