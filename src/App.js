import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
    return (
        <div className='App'>
            <ThemeContextProvider>
                <Navbar />
                <BookList />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
