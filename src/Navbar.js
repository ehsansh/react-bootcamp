import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position='static' color='primary'>
                    <Toolbar>
                        <IconButton color='inherit'></IconButton>
                        <Typography variant='h6' color='inherit'>
                            App Title
                        </Typography>
                        <Switch />
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
}
