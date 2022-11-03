import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'config/settings';
import type { ArticleInterface, createNewArticle } from 'types/ArticleInterface';
import { SLICE_NAME } from '../constants';
import { setInitialState } from '../slice';

interface In {
  article: createNewArticle;
}

interface Out {
  article: ArticleInterface;
}

export const postCreateArticle = createAsyncThunk<Out, In>(`${SLICE_NAME}/postCreateArticle`, async (newArticle, { dispatch }) => {
  try {
    const response = await axiosInstance.post(`articles`, newArticle);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка создания статьи, ${e}`);
  } finally {
    setTimeout(() => {
      dispatch(setInitialState());
    });
  }
});
