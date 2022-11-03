import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'config/settings';
import type { CommentInterface } from 'types/CommentInterface';
import { SLICE_NAME } from 'store/comments/constants';

interface In {
  slug: string;
}

interface Out {
  comments: CommentInterface[];
}

export const getComments = createAsyncThunk<Out, In>(`${SLICE_NAME}/fetchComments`, async ({ slug }) => {
  try {
    const response = await axiosInstance.get(`articles/${slug}/comments`);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка загрузки, ${e}`);
  }
});
