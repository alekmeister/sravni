import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'store/auth/constants';
import type { State } from './types';

const getInitialState = (): State => ({
  serverError: null,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {
    setError(state, { payload }) {
      state.serverError = payload;
    },
  },
});

export const { setError } = slice.actions;
export default slice.reducer;
