import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import { ThemeContextProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { AuthContextProvider } from './context/AuthContext';
import BookContextProvider from './context/BookContext';

function App() {
    return (
        <div className='App'>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar />
                    <BookContextProvider>
                        <BookList />
                    </BookContextProvider>
                    <ThemeToggle />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
