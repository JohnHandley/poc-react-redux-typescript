import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import { RootAction } from '../root-action';

import { CounterActions, CounterActionType } from './';

export type CountersState = {
  readonly reduxCounter: number;
};

export const CountersReducer = combineReducers<CountersState, CounterActionType>({
  reduxCounter: (state = 0, action: CounterActionType) => {
    switch (action.type) {
      case getType(CounterActions.increment):
        return state + 1; // action is type: { type: "INCREMENT_COUNTER"; }
      case getType(CounterActions.decrement):
        return state - 1; // action is type: { type: "DECREMENT_COUNTER"; }
      case getType(CounterActions.add):
        return state + action.payload; // action is type: { type: "ADD_TO_COUNTER"; payload: number; }
      case getType(CounterActions.subtract):
        return state - action.payload; // action is type: { type: "SUBTRACT_FROM_COUNTER"; payload: number; }
      default:
        return state;
    }
  },
});

export default CountersReducer;
