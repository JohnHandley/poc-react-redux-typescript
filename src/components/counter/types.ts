export type CounterStateProps = {
    count: number;
};

export type CounterDispatchProps = {
    onIncrement: () => void;
};

export type CounterOwnProps = {
    initialCount: number;
};

export type CounterProps = CounterStateProps & CounterDispatchProps & CounterOwnProps;
