import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookData from '../../data';

const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/w3Mw9PJvOL6DhMbpbOS8/books';
const initialState = {
  books: [...bookData],
};

export const addBook = createAsyncThunk(
  'books/addBook',
  async (items, thunkAPI) => {
    try {
      const { data } = await axios.post(url, items);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const getBooks = createAsyncThunk(
  'books/addBook',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((item) => item.item_id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      state.books = payload;
    });
  },
});
export const { removeBook } = booksSlice.actions;

export default booksSlice.reducer;
