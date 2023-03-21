import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchToken } from 'service/abzAPI';
import { token } from 'service/hosts';

export const getToken = createAsyncThunk(
  'token/getToken',
  async (_, thunkAPI) => {
    try {
      const { token: authId } = await fetchToken();
      token.set(authId);
      return authId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
