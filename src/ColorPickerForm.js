import * as React from 'react';

import { useEffect } from 'react';

import Button from '@mui/material/Button';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { ChromePicker } from 'react-color';

export default function ColorPickerForm(props) {
    const { paletteIsFull, colors, addNewColors, newName, updateNameValue } =
        props;
    const [currentColor, setColor] = React.useState('orange');

    const updateCurrentColor = ({ hex }) => setColor(hex);
    const addNewColorsHandler = () => {
        addNewColors({ color: currentColor, name: newName });
    };
    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            return colors.every(({ name }) => {
                return name.toLowerCase() !== value.toLowerCase();
            });
        });

        ValidatorForm.addValidationRule('isColorUnique', value => {
            return colors.every(({ color }) => {
                return color !== currentColor;
            });
        });
    });
    return (
        <div>
            <ChromePicker
                color={currentColor}
                onChangeComplete={updateCurrentColor}
            />
            <ValidatorForm onSubmit={addNewColorsHandler}>
                <TextValidator
                    value={newName}
                    onChange={updateNameValue}
                    validators={[
                        'required',
                        'isColorNameUnique',
                        'isColorUnique',
                    ]}
                    errorMessages={[
                        'Enter a color name',
                        'Color name must be unique',
                        'Color is already used',
                    ]}
                />
                <Button
                    variant='contained'
                    color='primary'
                    style={{
                        backgroundColor: paletteIsFull ? 'grey' : currentColor,
                    }}
                    type='submit'
                    disabled={paletteIsFull}
                >
                    {paletteIsFull ? 'Palette is full' : 'Add Color'}
                </Button>
            </ValidatorForm>
        </div>
    );
}
