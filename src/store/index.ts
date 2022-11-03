import { configureStore, combineReducers } from '@reduxjs/toolkit';
import articlesReducer from 'store/mainPage/articles/slice';
import tagsReducer from 'store/tags/slice';
import commentsReducer from 'store/comments/slice';
import userReducer from 'store/auth/slice';
import articlePreviewReducer from 'store/articlePreview/slice';
import newArticleReducer from 'store/newArticle/slice';
import serverErrorReducer from 'store/serverError/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  articlePreview: articlePreviewReducer,
  serverError: serverErrorReducer,
  newArticle: newArticleReducer,
  articles: articlesReducer,
  comments: commentsReducer,
  tags: tagsReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
