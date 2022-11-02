import { createSlice } from '@reduxjs/toolkit';
import { UserAuthInterface } from 'types/UserAuthInterface';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { postLogin } from 'store/auth/actionCreators/postLogin';
import { State } from './types';

const getInitialState = (): State => ({
  user: {} as UserAuthInterface,
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: 'user',
  initialState: getInitialState(),
  reducers: {
    logOut(state) {
      state.user = {} as UserAuthInterface;
      state.status = REQUEST_STATUS.PENDING;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(postLogin.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
  },
});
export const { logOut } = slice.actions;
export default slice.reducer;
