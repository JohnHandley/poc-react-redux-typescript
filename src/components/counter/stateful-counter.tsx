import * as React from 'react';
import { StatelessCounter } from './stateless-counter';
import { CounterProps, CounterStateProps } from './types';
import { countersSelectors } from 'Features/counters';

export class StatefulCounter extends React.Component<CounterProps, CounterStateProps> {

    timer: number;

    componentDidMount() {
        this.timer = setInterval(this.props.onIncrement, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
      return (
        <StatelessCounter count={this.props.count}/>
      );
    }
}
