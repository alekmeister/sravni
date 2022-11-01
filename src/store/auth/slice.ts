import { createSlice } from '@reduxjs/toolkit';
import { UserAuthInterface } from 'types/UserAuthInterface';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { getComments } from 'store/comments/actionCreators/getComments';
import { postLogin } from 'store/auth/actionCreators/postLogin';
import { State } from './types';

const getInitialState = (): State => ({
  user: {} as UserAuthInterface,
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: 'user',
  initialState: getInitialState(),
  reducers: {},
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

export default slice.reducer;
