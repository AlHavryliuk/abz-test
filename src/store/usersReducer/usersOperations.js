import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers, postUser } from 'service/abzAPI';
import { setTotalPage } from 'store/paginationReducer/paginationSlice';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (page, { rejectWithValue, dispatch }) => {
    try {
      const { users, total_pages } = await fetchUsers(page);
      dispatch(setTotalPage(total_pages));
      return { users };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await postUser(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
