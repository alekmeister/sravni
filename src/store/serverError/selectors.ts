import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const selectNodeState = (state: RootState) => state.serverError;

export const selectServerError = createSelector(selectNodeState, ({ serverError }) => serverError);
