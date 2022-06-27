import './App.css';
import CounterHooks from './CounterHooks';
import SimpleFormHook from './SimpleFormHook';
import SimpleFormCustomHook from './SimpleFormCustomHook';
import Toggler from './Toggler';
function App() {
    return (
        <div className='App'>
            <CounterHooks />
            <Toggler />
            <SimpleFormHook />
            <SimpleFormCustomHook />
        </div>
    );
}

export default App;
