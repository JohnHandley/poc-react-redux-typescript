import * as React from 'react';
import { CounterStateProps } from 'Components/counter/types';

export const StatelessCounter: React.SFC<CounterStateProps> = (props) => {
  const { count } = props;

  return (
    <div>
      <span>count: {count} </span>
    </div>
  );
};
