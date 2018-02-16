import * as React from 'react';
import { bindActionCreators } from 'redux';
import { Dispatch, Options } from 'react-redux';

import { RootState } from '../../features/root-reducer';
import { CounterActions, countersSelectors, CounterActionType } from '../../features/counters';
import { StatefulCounter } from './stateful-counter';
import { StatelessCounter } from './stateless-counter';
import { connect } from 'react-redux'; // '../../connect';
import { CounterOwnProps, CounterStateProps, CounterDispatchProps } from './types';

const mapStateToProps =
    (state: RootState, ownProps: CounterOwnProps): CounterStateProps => ({
        count: countersSelectors.getReduxCounter(state) + ownProps.initialCount,
    });

const mapDispatchToProps =
    (dispatch: Dispatch<CounterActionType>): CounterDispatchProps => bindActionCreators({
        onIncrement: CounterActions.increment,
    }, dispatch);

export const ConnectedCounter =
    connect(mapStateToProps, mapDispatchToProps)(StatefulCounter);
