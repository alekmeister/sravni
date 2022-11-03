import React, { FC, useEffect } from 'react';
import { Button } from 'ui-kit/Button';
import { useAppDispatch, useAppSelector } from 'store/types';
import { postLogin } from 'store/auth/actionCreators/postLogin';
import { Link, useNavigate } from 'react-router-dom';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { v4 as uuid } from 'uuid';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import type { AuthFields } from 'types/UserAuthInterface';
import { Preloader } from 'ui-kit/Preloader';
import { formLogin, formRegistration, loginInitValues, loginPage, loginValidSchema, regInitValues, registrationPage, regValidSchema } from 'components/Auth/formsData';
import { selectAuthStatus, selectServerErr } from 'store/auth';
import style from './Auth.module.scss';

interface AuthProps {
  typeAuthProps: 'login' | 'registration';
}

export const Auth: FC<AuthProps> = ({ typeAuthProps }) => {
  const statusLogin = useAppSelector(selectAuthStatus);
  const errorMsg = useAppSelector(selectServerErr);
  const isLoading = statusLogin === REQUEST_STATUS.LOADING;
  const isError = statusLogin === REQUEST_STATUS.ERROR;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLogin = typeAuthProps === 'login';
  const currentForm = isLogin ? formLogin : formRegistration;
  const { title, text, route } = isLogin ? loginPage : registrationPage;
  const currentInitValues = isLogin ? loginInitValues : regInitValues;
  const currentValidSchema = isLogin ? loginValidSchema : regValidSchema;

  const handleLogin = (value: AuthFields) => {
    dispatch(postLogin({ user: value }));
  };
  useEffect(() => {
    if (statusLogin === REQUEST_STATUS.SUCCESS) {
      navigate('/');
    }
  }, [statusLogin]);

  return (
    <div className={style.auth}>
      <div className={style.container}>
        <h1 className={style.title}>{title}</h1>
        <Link to={route} className={style.text}>
          {text}
        </Link>
        <Formik initialValues={currentInitValues} validationSchema={currentValidSchema} onSubmit={(values) => handleLogin(values)}>
          <Form className={style.form}>
            {currentForm.map(({ name, placeholder, type }) => (
              <div key={uuid()}>
                <Field className={style.field} type={type} placeholder={placeholder} name={name} />
                <ErrorMessage className={style.valid} name={name} component="span" />
              </div>
            ))}
            {isError ? <div className={style.valid}>{errorMsg}</div> : null}
            <div className={style.btn}>
              {isLoading ? (
                <Preloader />
              ) : (
                <Button destination="empty" type="submit">
                  {title}
                </Button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
