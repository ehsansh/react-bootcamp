import React, { useContext } from 'react';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LanguageContext } from './contexts/LanguageContext';

function Form(props) {
    const { language, changeLanguage } = useContext(LanguageContext);
    return (
        <main>
            <Paper>
                <p>language is : {language}</p>
                <Avatar>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography variant='h5'>sign in</Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value='english'>English</MenuItem>
                    <MenuItem value='persian'>Persian</MenuItem>
                    <MenuItem value='french'>French</MenuItem>
                </Select>
                <form>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>Email</InputLabel>
                        <Input id='email' name='email' autoFocus></Input>
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>password</InputLabel>
                        <Input id='password' name='password' autoFocus></Input>
                    </FormControl>
                    <FormControlLabel
                        control={
                            <Checkbox color='primary' label='remember me' />
                        }
                    />
                </form>
                <Button
                    variant='contained'
                    type='submit'
                    fullWidth
                    color='primary'
                >
                    Sign in
                </Button>
            </Paper>
        </main>
    );
}

export default Form;
