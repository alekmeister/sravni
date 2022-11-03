import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import type { State } from './types';
import { postCreateArticle } from './actionCreators/postCreateArticle';
import { SLICE_NAME } from './constants';

const getInitialState = (): State => ({
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {
    setInitialState() {
      return getInitialState();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postCreateArticle.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(postCreateArticle.fulfilled, (state) => {
      // state.createdArticle = action.payload.article;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(postCreateArticle.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
  },
});
export const { setInitialState } = slice.actions;
export default slice.reducer;
