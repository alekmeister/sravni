import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'config/settings';
import { SLICE_NAME } from '../constants';

interface Out {
  tags: string[];
}

export const getPopularTags = createAsyncThunk<Out>(`${SLICE_NAME}/fetchPopularTags`, async () => {
  try {
    const response = await axiosInstance.get(`tags`);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка загрузки тэгов, ${e}`);
  }
});
