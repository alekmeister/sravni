import { REQUEST_STATUS } from 'types/RequestStatuses';
import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'store/mainPage/articles/constants';
import { State } from './types';
import { getComments } from './actionCreators/getComments';

const getInitialState = (): State => ({
  comments: [],
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload.comments;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(getComments.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
  },
});

export default slice.reducer;
