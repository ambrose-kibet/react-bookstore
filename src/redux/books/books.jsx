import { createSlice } from '@reduxjs/toolkit';
import bookData from '../../data';

const initialState = {
  books: [...bookData],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((item) => item.item_id !== payload);
    },
  },
});
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
