import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from 'store/articles/slice';
import tagsSlice from 'store/tags/slice';

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    tags: tagsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
