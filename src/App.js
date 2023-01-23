import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import { ThemeContextProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { AuthContextProvider } from './context/AuthContext';

function App() {
    return (
        <div className='App'>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar />
                    <BookList />
                    <ThemeToggle />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
