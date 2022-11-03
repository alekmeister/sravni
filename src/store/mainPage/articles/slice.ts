import { REQUEST_STATUS } from 'types/RequestStatuses';
import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'store/mainPage/articles/constants';
import type { State } from 'store/mainPage/articles/types';
import { getArticles } from 'store/mainPage/articles/actionCreators/getArticles';

const getInitialState = (): State => ({
  articles: [],
  articlesCount: 0,
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(getArticles.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
  },
});

export default slice.reducer;
