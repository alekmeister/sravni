import { createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'store/articles/constants';
import axios from 'axios';
import { baseApiUrl } from 'config/api';

interface Out {
  tags: string[];
}

export const getPopularTags = createAsyncThunk<Out>(`${SLICE_NAME}/fetchPopularTags`, async () => {
  try {
    const response = await axios.get(`${baseApiUrl}/tags`);
    console.log(response);
    return response.data;
  } catch (e) {
    throw new Error(`Ошибка загрузки тэгов, ${e}`);
  }
});
