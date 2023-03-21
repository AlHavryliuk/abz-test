import { createSlice } from '@reduxjs/toolkit';

const initialState = { totalPages: 1, currentPage: 1 };

export const paginationSlice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    setTotalPage(state, action) {
      state.totalPages = action.payload;
    },
    incrementPage(state) {
      state.currentPage = ++state.currentPage;
    },
  },
});

const paginationReducer = paginationSlice.reducer;
export const { setTotalPage, incrementPage } = paginationSlice.actions;
export default paginationReducer;
