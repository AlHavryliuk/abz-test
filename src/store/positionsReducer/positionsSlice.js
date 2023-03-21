import { createSlice } from '@reduxjs/toolkit';
import { getPositions } from './postionsOperations';

const initialState = { positions: null, isLoading: false, error: null };

export const positionsSlice = createSlice({
  name: 'positions',
  initialState: initialState,
  extraReducers: builder =>
    builder

      .addCase(getPositions.pending, state => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(getPositions.fulfilled, (state, action) => {
        if (state.positions) {
          state.positions = [...state.positions, ...action.payload.positions];
        } else {
          state.positions = action.payload.positions;
        }
        state.isLoading = false;
      })

      .addCase(getPositions.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

const positionsReducer = positionsSlice.reducer;
export default positionsReducer;
