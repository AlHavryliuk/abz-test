import { createSlice } from '@reduxjs/toolkit';
import { getToken } from './tokenOperation';

const initialState = { token: null, isLoading: false, error: null };

export const tokenSlice = createSlice({
  name: 'token',
  initialState: initialState,
  extraReducers: builder =>
    builder

      .addCase(getToken.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const tokenReducer = tokenSlice.reducer;
export default tokenReducer;
