import * as React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function PaletteFormNav(props) {
    const {
        open,
        handleSubmit,
        handleDrawerOpen,
        updatePaletteName,
        newPaletteName,
    } = props;

    const updatePaletteNameHandler = evt => {
        updatePaletteName(evt);
    };
    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return props.palettes.every(({ paletteName }) => {
                return paletteName.toLowerCase() !== value.toLowerCase();
            });
        });
    });

    return (
        <div>
            <CssBaseline />
            <AppBar position='fixed' color='default' open={open}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDrawerOpen}
                        edge='start'
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' noWrap component='div'>
                        Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={handleSubmit}>
                        <TextValidator
                            label='palette name'
                            value={newPaletteName}
                            onChange={updatePaletteNameHandler}
                            validators={['required', 'isPaletteNameUnique']}
                            errorMessages={[
                                'Enter Palette Name',
                                'Name already in use',
                            ]}
                        />
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            Save Palette
                        </Button>
                        <Link to='/'>
                            <Button variant='contained' color='secondary'>
                                Go Back
                            </Button>
                        </Link>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
        </div>
    );
}
