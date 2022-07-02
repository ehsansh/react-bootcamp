import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
function Navbar(props) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    return (
        <div>
            <AppBar
                position='static'
                color={isDarkMode ? 'default' : 'primary'}
            >
                <Toolbar>
                    <IconButton color='inherit'></IconButton>
                    <Typography variant='h6' color='inherit'>
                        App Title {language}
                    </Typography>
                    <Switch onClick={toggleTheme} />
                    <div className='search'>
                        <div className='searhcIcon'>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search...' />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar;
