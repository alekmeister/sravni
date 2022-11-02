import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { ArticleInterface } from 'types/ArticleInterface';
import { State } from './types';
import { postCreateArticle } from './actionCreators/postCreateArticle';

const getInitialState = (): State => ({
  createdArticle: {} as ArticleInterface,
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: 'newArticle',
  initialState: getInitialState(),
  reducers: {
    changeStatus(state) {
      state.status = REQUEST_STATUS.PENDING;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postCreateArticle.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(postCreateArticle.fulfilled, (state, action) => {
      state.createdArticle = action.payload.article;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(postCreateArticle.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
  },
});
export const { changeStatus } = slice.actions;
export default slice.reducer;
