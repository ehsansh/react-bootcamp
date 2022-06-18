import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Slider from 'rc-slider';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import 'rc-slider/assets/index.css';

import {
    SelectContainer,
    NavbarContainer,
    Logo,
    SliderContainer,
} from './styles/NavbarStyles';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: 'hex',
            open: false,
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    closeSnackbar() {
        this.setState({ open: false });
    }
    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true });
        this.props.handleFormatChange(e.target.value);
    }
    render() {
        const { level, changeLevel, showAllColors } = this.props;
        const { format, open } = this.state;
        return (
            <NavbarContainer>
                <Logo>
                    <Link to='/'>react colorpicker</Link>
                </Logo>
                {showAllColors && (
                    <div>
                        <span>Level:{level}</span>
                        <SliderContainer>
                            <Slider
                                defaultValue={level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={changeLevel}
                            />
                        </SliderContainer>
                    </div>
                )}
                <SelectContainer>
                    <FormControl fullWidth>
                        <Select
                            value={format}
                            onChange={this.handleFormatChange}
                        >
                            <MenuItem value='hex'>HEX - #fff</MenuItem>
                            <MenuItem value='rgb'>
                                RGB - rgb(255,255,255)
                            </MenuItem>
                            <MenuItem value='rgba'>
                                RGBA - rgb(255,255,255,0.1)
                            </MenuItem>
                        </Select>
                    </FormControl>
                </SelectContainer>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={open}
                    autoHideDuration={3000}
                    message={
                        <span id='message-id'>
                            Format changed to {format.toUpperCase()}!
                        </span>
                    }
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color='inherit'
                            key='close'
                        >
                            <CloseIcon></CloseIcon>
                        </IconButton>,
                    ]}
                />
            </NavbarContainer>
        );
    }
}
