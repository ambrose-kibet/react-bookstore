import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    'Fantasy',
    'Sci-Fi',
    'Mystery',
    'Thriller',
    'Romance',
    'Westerns',
    'Dystopian',
    'Contemporary',
    'Action',
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => ({ ...initialState, status: 'Under construction' }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
