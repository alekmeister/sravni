import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from 'store/mainPage/articles/slice';
import tagsReducer from 'store/tags/slice';
import commentsReducer from 'store/comments/slice';
import userReducer from 'store/auth/slice';
import articlePreviewReducer from 'store/articlePreview/slice';

export const store = configureStore({
  reducer: {
    articlePreview: articlePreviewReducer,
    articles: articlesReducer,
    comments: commentsReducer,
    tags: tagsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
