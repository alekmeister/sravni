import { createSelector } from '@reduxjs/toolkit';
import type { ArticleInterface } from 'types/ArticleInterface';
import type { RootState } from '../index';

const defaultArticlePreview: ArticleInterface = {
  slug: '',
  createdAt: '',
  description: '',
  favorited: false,
  favoritesCount: NaN,
  title: '',
  tagList: [],
  author: {
    username: '',
    bio: '',
    image: '',
    following: false,
  },
  body: '',
  updatedAt: '',
};

const selectNodeState = (state: RootState) => state.articlePreview;

export const selectArticlePreview = createSelector(selectNodeState, ({ articlePreview }) => articlePreview || defaultArticlePreview);
export const selectArticlePreviewRequestStatus = createSelector(selectNodeState, ({ status }) => status);
