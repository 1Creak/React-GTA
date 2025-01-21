import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

function Counter(){
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Счётчик: {value}</h1>
            <button onClick={() => dispatch(increment())}>Add</button>
            <button onClick={() => dispatch(decrement())}>Remove</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
        </div>
    );
}

export default Counter;
