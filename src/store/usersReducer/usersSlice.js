import { createSlice } from '@reduxjs/toolkit';
import swal from 'sweetalert';
import { addUser, getUsers } from './usersOperations';

const initialState = { users: null, isLoading: false, error: null };

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    clearUserList(state) {
      state.users = null;
    },
  },
  extraReducers: builder =>
    builder

      // ---- GET USER ----

      .addCase(getUsers.pending, state => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(getUsers.fulfilled, (state, action) => {
        if (state.users) {
          state.users = [...state.users, ...action.payload.users];
        } else {
          state.users = action.payload.users;
        }
        state.isLoading = false;
      })

      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      // ---- POST USER ----

      .addCase(addUser.pending, state => {
        state.error = null;
        state.isLoading = true;
      })

      .addCase(addUser.fulfilled, (state, action) => {
        swal('Success', 'User added successfully', 'success');
        state.isLoading = false;
      })

      .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload;
        swal('Error', 'Something went wrong... Try again...', 'error');
        state.isLoading = false;
      }),
});

const usersReducer = usersSlice.reducer;
export const { clearUserList } = usersSlice.actions;
export default usersReducer;
