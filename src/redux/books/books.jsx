import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookData from '../../data';
import axios from 'axios';
const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/w3Mw9PJvOL6DhMbpbOS8/books';
const initialState = {
  books: [],
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
  'books/getBook',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const deleteBooks = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(url + `/${id}`);
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
      const booklist = [];

      for (const key in payload) {
        let newOBJ = {};
        newOBJ['item_id'] = key;
        newOBJ = { ...newOBJ, ...payload[key][0] };
        booklist.push(newOBJ);
      }

      state.books = booklist;
    });
  },
});
export const { removeBook } = booksSlice.actions;

export default booksSlice.reducer;
