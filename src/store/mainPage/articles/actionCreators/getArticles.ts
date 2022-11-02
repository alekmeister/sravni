import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { SLICE_NAME } from 'store/mainPage/articles/constants';
import { baseApiUrl } from 'config/settings';
import { ArticleInterface } from 'types/ArticleInterface';

interface In {
  offset?: number;
  tag?: string;
  limit?: number;
}

interface Out {
  articles: ArticleInterface[];
  articlesCount: number;
}

export const getArticles = createAsyncThunk<Out, In>(`${SLICE_NAME}/fetchArticles`, async ({ offset, tag, limit }) => {
  const qryOffset = typeof offset === 'number' ? `&offset=${offset}` : '';
  const qryTag = tag ? `&tag=${tag}` : '';
  const qryLimit = typeof limit === 'number' ? `?limit=${limit}` : '';
  try {
    const response = await axios.get(`${baseApiUrl}/articles${qryLimit}${qryOffset}${qryTag}`);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка загрузки, ${e}`);
  }
});
