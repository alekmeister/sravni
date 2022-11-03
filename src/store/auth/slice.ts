import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { postLogin } from 'store/auth/actionCreators/postLogin';
import { TokenService } from 'services';
import { SLICE_NAME } from 'store/auth/constants';
import type { State } from './types';

const getInitialState = (): State => ({
  user: null,
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {
    logOut(state) {
      state.user = null;
      TokenService.deleteLocalAccessToken();
      state.status = REQUEST_STATUS.PENDING;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(postLogin.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(postLogin.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
  },
});
export const { logOut } = slice.actions;
export default slice.reducer;
