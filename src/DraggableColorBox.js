import React from 'react';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
const Root = styled('div')(({ theme }) => ({
    height: '25%',
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
        color: 'white',
        transform: 'scale(1.5)',
    },
    svg: {
        transition: 'all 0.3s ease-in-out',
    },
}));

const BoxContent = styled('div')(({ theme }) => ({
    width: '100%',
    position: 'absolute',
    padding: '10px',
    color: 'rgba(0,0,0,0.5)',
    left: '0',
    bottom: '0',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
}));

export default function DraggableColorBox(props) {
    return (
        <Root style={{ backgroundColor: props.color }}>
            <BoxContent>
                <span>{props.name}</span>
                <DeleteIcon onClick={props.handleClick} />
            </BoxContent>
        </Root>
    );
}
