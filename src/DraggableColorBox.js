import React from 'react';
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
}));

export default function DraggableColorBox(props) {
    return <Root style={{ backgroundColor: props.color }}>{props.color}</Root>;
}
