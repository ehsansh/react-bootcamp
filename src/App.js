import './App.css';

import Lottery from './Lottery';

function App() {
    return (
        <div className='App'>
            <Lottery title='lottery' maxNum={30} numBalls={5} />
        </div>
    );
}

export default App;
