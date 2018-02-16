// RootActions
import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { getReturnOfExpression } from 'utility-types';

import { CounterActions } from './counters/actions';

export const actions = {
  counters: CounterActions,
};

const returnsOfActions = [
  ...Object.values(CounterActions),
].map(getReturnOfExpression);

type AppAction = typeof returnsOfActions[number];
type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction =
  | AppAction
  | ReactRouterAction;
