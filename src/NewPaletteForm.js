import * as React from 'react';

import { useNavigate } from 'react-router-dom';

import DraggableColorBox from './DraggableColorBox';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Button from '@mui/material/Button';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

NewPaletteForm.defaultProps = {
    maxColors: 20,
};

export default function NewPaletteForm(props) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const [colors, setColors] = React.useState(props.palettes[0].colors);

    const [newName, setNewName] = React.useState('');
    const [newPaletteName, setNewPaletteName] = React.useState('');
    const paletteIsFull = colors.length >= props.maxColors;

    const addNewColors = newColor => {
        setColors([...colors, newColor]);
        setNewName('');
    };
    const clearColors = () => {
        setColors([]);
    };
    const addRandomColor = () => {
        const allColors = props.palettes.map(p => p.colors).flat();
        const rand = Math.floor(Math.random() * allColors.length);
        const randColor = allColors[rand];
        setColors([...colors, randColor]);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const updateNameValue = evt => {
        setNewName(evt.target.value);
    };
    const updatePaletteName = evt => {
        setNewPaletteName(evt.target.value);
    };
    const handleSubmit = () => {
        let newName = newPaletteName;
        const newPalette = {
            paletteName: newName,
            id: newName.toLocaleLowerCase().replace(/ /g, '-'),
            colors: colors,
        };
        props.savePalette(newPalette);

        navigate('/');
    };

    const removeColor = colorName => {
        setColors(colors.filter(color => color.name !== colorName));
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <PaletteFormNav
                open={open}
                handleSubmit={handleSubmit}
                handleDrawerOpen={handleDrawerOpen}
                updatePaletteName={updatePaletteName}
                newPaletteName={newPaletteName}
                palettes={props.palettes}
            />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant='persistent'
                anchor='left'
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Typography variant='h4'>Design Your Palette</Typography>
                <div>
                    <Button
                        onClick={clearColors}
                        variant='contained'
                        color='secondary'
                    >
                        Clear Palette
                    </Button>
                    <Button
                        onClick={addRandomColor}
                        variant='contained'
                        color='primary'
                        disabled={paletteIsFull}
                    >
                        Random Color
                    </Button>
                </div>
                <ColorPickerForm
                    paletteIsFull={paletteIsFull}
                    colors={colors}
                    addNewColors={addNewColors}
                    newName={newName}
                    updateNameValue={updateNameValue}
                />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {colors.map(c => (
                    <DraggableColorBox
                        key={c.name}
                        {...c}
                        handleClick={() => removeColor(c.name)}
                    />
                ))}
            </Main>
        </Box>
    );
}
