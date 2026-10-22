import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='h-screen container mx-auto flex justify-center items-center'>
            <CircularProgress color="success" aria-label="Loading…" />
        </div>
    );
};

export default LoadingSpinner;