import { REQUEST_STATUS } from 'types/RequestStatuses';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'store/articles/constants';
import { State } from 'store/articles/types';
import { getAllArticles } from 'store/articles/actionCreators/getArticles';

const getInitialState = (): State => ({
  articles: [],
  articlesCount: 0,
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {
    // addNote(state, { payload }: PayloadAction<Inote>) {
    //   state.notes.push(payload);
    // },
    // removeNote(state, action: PayloadAction<Inote>) {
    //   state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    // },
  },
  extraReducers: (builder) => {
    // Загрузка всех постов
    builder.addCase(getAllArticles.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(getAllArticles.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(getAllArticles.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
  },
});

// export const { addNote, removeNote } = slice.actions;
export default slice.reducer;
