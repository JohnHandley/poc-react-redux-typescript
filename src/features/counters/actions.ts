import { createAction } from 'typesafe-actions';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export type INCREMENT_COUNTER = typeof INCREMENT_COUNTER;

export const ADD_TO_COUNTER = 'ADD_TO_COUNTER';
export type ADD_TO_COUNTER = typeof ADD_TO_COUNTER;

export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export type DECREMENT_COUNTER = typeof DECREMENT_COUNTER;

export const SUBTRACT_FROM_COUNTER = 'SUBTRACT_FROM_COUNTER';
export type SUBTRACT_FROM_COUNTER = typeof SUBTRACT_FROM_COUNTER;

export interface IncrementCounter {
  type: INCREMENT_COUNTER;
}
export interface DecrementCounter {
  type: DECREMENT_COUNTER;
}

export interface AddToCounter {
  type: ADD_TO_COUNTER;
  payload: number;
}
export interface SubtractFromCounter {
  type: SUBTRACT_FROM_COUNTER;
  payload: number;
}

export type CounterActionType =
  IncrementCounter | DecrementCounter | AddToCounter | SubtractFromCounter;

export const CounterActions = {
  increment: createAction(INCREMENT_COUNTER, () => ({
    type: INCREMENT_COUNTER,
  })),
  decrement: createAction(DECREMENT_COUNTER, () => ({
    type: DECREMENT_COUNTER,
  })),
  add: createAction(ADD_TO_COUNTER, (amount: number) => ({
    type: ADD_TO_COUNTER,
    payload: amount,
  })),
  subtract: createAction(SUBTRACT_FROM_COUNTER, (amount: number) => ({
    type: SUBTRACT_FROM_COUNTER,
    payload: amount,
  })),
};
