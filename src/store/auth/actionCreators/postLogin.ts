import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApiUrl } from 'config/api';
import { SLICE_NAME } from 'store/auth/constants';
import { UserAuthInterface } from 'types/UserAuthInterface';

interface In {
  user: {
    username?: string;
    email: string;
    password: string;
  };
}

interface Out {
  user: UserAuthInterface;
}

export const postLogin = createAsyncThunk<Out, In>(`${SLICE_NAME}/fetchComments`, async (user) => {
  const qryRegistration = user.user.username ? '' : '/login';
  console.log(user.user.username);
  try {
    const response = await axios.post(`${baseApiUrl}/users${qryRegistration}`, user);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка загрузки, ${e}`);
  }
});
