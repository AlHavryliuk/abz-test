import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPositions } from 'service/abzAPI';


export const getPositions = createAsyncThunk(
  'positions/getPositions',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { positions } = await fetchPositions();
      return { positions };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
