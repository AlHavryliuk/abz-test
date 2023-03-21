export const select = {
  users: state => state.users.users,
  positions: state => state.positions.positions,
  currentPage: state => state.pagination.currentPage,
  totalPages: state => state.pagination.totalPages,
};
