import { RootState } from '../root-reducer';

export const getReduxCounter =
  (state: RootState) => state.counters.reduxCounter;
