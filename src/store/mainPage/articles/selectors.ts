import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/index';

const selectNodeState = (state: RootState) => state.articles;

export const selectArticlesState = createSelector(selectNodeState, (articles) => articles);
