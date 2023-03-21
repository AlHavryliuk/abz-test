import { combineReducers } from '@reduxjs/toolkit';
import paginationReducer from './paginationReducer/paginationSlice';
import positionsReducer from './positionsReducer/positionsSlice';
import tokenReducer from './tokenReducer/tokenSlice';
import usersReducer from './usersReducer/usersSlice';

export const rootReducer = combineReducers({
  users: usersReducer,
  positions: positionsReducer,
  pagination: paginationReducer,
  token: tokenReducer,
});
