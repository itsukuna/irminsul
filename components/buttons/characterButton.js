import React from 'react';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

const CharacterButton = ({ character }) => {
    const { name, vision, weaponType, icon, portrait } = character;

    return (
        <Button component="a" variant="contained" color="primary" sx={{ width: 150, height: 200 }}>
            <div style={{ textAlign: 'center' }}>
                <Image src={icon} alt={name} width={120} height={120} />
                <Typography >{name}</Typography>
            </div>
        </Button>
    );
};

export default CharacterButton;
