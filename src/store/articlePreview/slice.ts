import { REQUEST_STATUS } from 'types/RequestStatuses';
import { createSlice } from '@reduxjs/toolkit';
import { getArticlePreview } from 'store/articlePreview/actionCreators/getArticlePreview';
import { SLICE_NAME } from './constants';
import type { State } from './types';

const getInitialState = (): State => ({
  articlePreview: null,
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticlePreview.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(getArticlePreview.fulfilled, (state, action) => {
      state.articlePreview = action.payload.article;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(getArticlePreview.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
  },
});

export default slice.reducer;
