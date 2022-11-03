import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const selectNodeState = (state: RootState) => state.newArticle;

export const selectNewArticleStatus = createSelector(selectNodeState, ({ status }) => status);
