import React from 'react';
import { ToggleButtonGroup, ToggleButton, Grid } from '@mui/material';
import visions from '@/data/visions/visions';
import Image from 'next/image';

const VisionFilter = ({ selectedVision, onFilterChange }) => {
    const handleFilter = (vision) => {
        onFilterChange(vision);
    };

    return (
        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
            <ToggleButtonGroup
                value={selectedVision}
                exclusive
                onChange={(event, vision) => handleFilter(vision)}
                sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}
            >
                {visions.map((vision) => (
                    <ToggleButton
                        key={vision.name}
                        value={vision.name}
                        sx={{
                            backgroundColor: selectedVision === vision.name ? 'primary.main' : 'transparent',
                            color: selectedVision === vision.name ? 'white' : 'inherit',
                            '&:hover': {
                                backgroundColor: selectedVision === vision.name ? 'primary.dark' : 'transparent',
                            },
                        }}
                    >
                        <Image src={vision.icon} alt={vision.name} width={24} height={24} />
                    </ToggleButton>
                ))}
                <ToggleButton
                    value=""
                    sx={{
                        backgroundColor: selectedVision === '' ? 'primary.main' : 'transparent',
                        color: selectedVision === '' ? 'white' : 'inherit',
                        '&:hover': {
                            backgroundColor: selectedVision === '' ? 'primary.dark' : 'transparent',
                        },
                    }}
                >
                    All
                </ToggleButton>
            </ToggleButtonGroup>
        </Grid>
    );
};

export default VisionFilter;
