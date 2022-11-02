import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApiUrl } from 'config/settings';
import { ArticleInterface } from 'types/ArticleInterface';
import { SLICE_NAME } from 'store/articlePreview/constants';

interface In {
  slug: string;
}

interface Out {
  article: ArticleInterface;
}

export const getArticlePreview = createAsyncThunk<Out, In>(`${SLICE_NAME}/fetchArticlePreview`, async ({ slug }) => {
  try {
    const response = await axios.get(`${baseApiUrl}/articles/${slug}`);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка загрузки, ${e}`);
  }
});
