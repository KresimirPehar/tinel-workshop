import { APPLY_FILTER } from './types';

const applyFilter = (filter) => ({
  type: APPLY_FILTER,
  filter,
});

export default applyFilter;
