import { REQUEST_STATUS } from 'types/RequestStatuses';
import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'store/articles/constants';
import { State } from 'store/tags/types';
import { getPopularTags } from 'store/articles/actionCreators/getPopularTags';

const getInitialState = (): State => ({
  popularTags: [],
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularTags.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(getPopularTags.fulfilled, (state, action) => {
      state.popularTags = action.payload.tags;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(getPopularTags.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
  },
});

export default slice.reducer;
