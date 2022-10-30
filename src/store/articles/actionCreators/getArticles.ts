import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { SLICE_NAME } from 'store/articles/constants';
import { baseApiUrl } from 'config/api';
import { ArticleInterface } from 'types/ArticleInterface';

interface In {
  offset: number;
  tag?: string;
}

interface Out {
  articles: ArticleInterface[];
  articlesCount: number;
}

export const getAllArticles = createAsyncThunk<Out, In>(`${SLICE_NAME}/fetchArticles`, async ({ offset, tag }) => {
  const stringWithTag = tag ? `&tag=${tag}` : '';
  try {
    const response = await axios.get(`${baseApiUrl}/articles?limit=10&offset=${offset}${stringWithTag}`);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка загрузки поста, ${e}`);
  }
});
