import { FormikField } from 'types/FormikFields';
import * as Yup from 'yup';

export const formRegistration: FormikField[] = [
  { name: 'username', placeholder: 'Username', type: 'text' },
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'password', placeholder: 'Password', type: 'password' },
];

export const formLogin: FormikField[] = [
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'password', placeholder: 'Password', type: 'password' },
];

export const loginPage = {
  title: 'Sign in',
  text: 'Need an account?',
};
export const registrationPage = {
  title: 'Sign up',
  text: 'Have an account?',
};

export const loginInitValues = {
  email: '',
  password: '',
};

export const regInitValues = {
  username: '',
  email: '',
  password: '',
};

export const loginValidSchema = Yup.object({
  email: Yup.string().email('Невалидный email').required('Обязательное поле'),
  password: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
});

export const regValidSchema = Yup.object({
  username: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
  email: Yup.string().email('Невалидный email').required('Обязательное поле'),
  password: Yup.string().min(2, 'Минимум 2 символа').required('Обязательное поле'),
});
