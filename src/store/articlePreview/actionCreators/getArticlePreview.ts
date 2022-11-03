import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'config/settings';
import type { ArticleInterface } from 'types/ArticleInterface';
import { SLICE_NAME } from 'store/articlePreview/constants';

interface In {
  slug: string;
}

interface Out {
  article: ArticleInterface;
}

export const getArticlePreview = createAsyncThunk<Out, In>(`${SLICE_NAME}/fetchArticlePreview`, async ({ slug }) => {
  try {
    const response = await axiosInstance.get(`articles/${slug}`);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка загрузки, ${e}`);
  }
});
