import React, { FC, useEffect } from 'react';
import { Button } from 'ui-kit/Button';
import { useAppDispatch, useAppSelector } from 'store/types';
import { postCreateArticle } from 'store/newArticle/actionCreators/postCreateArticle';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { Preloader } from 'ui-kit/Preloader';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import type { createNewArticle } from 'types/ArticleInterface';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import type { FormikField } from 'types/FormikFields';
import { selectNewArticleStatus } from 'store/newArticle/selectors';
import style from './NewArticle.module.scss';

const formNewArticle: FormikField[] = [
  { name: 'title', placeholder: 'Article Title' },
  { name: 'description', placeholder: "What's this article about?" },
  { name: 'body', placeholder: 'Write your article (in markdown)', as: 'textarea' },
  { name: 'tagList', placeholder: 'Enter tags' },
];

export const NewArticle: FC = () => {
  const status = useAppSelector(selectNewArticleStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = status === REQUEST_STATUS.LOADING;

  const handleCreateArticle = (article: createNewArticle) => {
    dispatch(postCreateArticle({ article }));
  };

  useEffect(() => {
    if (status === REQUEST_STATUS.SUCCESS) {
      navigate('/');
    }
  }, [status]);

  return (
    <div className={style.newArticle}>
      <Formik
        initialValues={{
          title: '',
          description: '',
          body: '',
          tagList: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
          description: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
          body: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
          tagList: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
        })}
        onSubmit={(values) => {
          const article: createNewArticle = { ...values, tagList: values.tagList.trim().split(' ') };
          handleCreateArticle(article);
        }}
      >
        <Form className={style.container}>
          {formNewArticle.map(({ name, placeholder, as = 'input' }) => (
            <div key={uuid()}>
              <Field as={as} className={style.field} placeholder={placeholder} name={name} />
              <ErrorMessage className={style.valid} name={name} component="span" />
            </div>
          ))}
          {isLoading ? (
            <Preloader />
          ) : (
            <div className={style.btn}>
              <Button destination="empty" type="submit">
                Piblish Article
              </Button>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};
