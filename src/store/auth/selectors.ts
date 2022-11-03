import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const selectNodeState = (state: RootState) => state.user;

export const selectUser = createSelector(selectNodeState, ({ user }) => user);
export const selectAuthStatus = createSelector(selectNodeState, ({ status }) => status);
export const selectServerErr = createSelector(selectNodeState, ({ error }) => error);
