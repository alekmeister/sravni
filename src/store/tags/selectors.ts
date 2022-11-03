import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/index';

const selectNodeState = (state: RootState) => state.tags;

export const selectTagsState = createSelector(selectNodeState, (tags) => tags);
