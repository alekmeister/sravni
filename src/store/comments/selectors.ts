import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const selectNodeState = (state: RootState) => state.comments;

export const selectCommentsRequestState = createSelector(selectNodeState, ({ status }) => status);
export const selectComments = createSelector(selectNodeState, ({ comments }) => comments);
