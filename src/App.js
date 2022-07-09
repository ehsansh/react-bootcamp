import { useReducer } from 'react';

function countReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.amount };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
    }
}

function App() {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });
    return (
        <div className='App'>
            <h1> {state.count} </h1>
            <button onClick={() => dispatch({ type: 'increment', amount: 1 })}>
                Add 1
            </button>
            <button onClick={() => dispatch({ type: 'increment', amount: 5 })}>
                Add 5
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                subtract 1
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    );
}

export default App;
