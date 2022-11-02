import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApiUrl } from 'config/settings';
import { SLICE_NAME } from 'store/auth/constants';
import { ArticleInterface, createNewArticle } from 'types/ArticleInterface';

interface In {
  article: createNewArticle;
}

interface Out {
  article: ArticleInterface;
}

export const postCreateArticle = createAsyncThunk<Out, In>(`${SLICE_NAME}/postCreateArticle`, async (newArticle) => {
  try {
    const response = await axios.post(`${baseApiUrl}/articles`, newArticle);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка создания статьи, ${e}`);
  }
});
