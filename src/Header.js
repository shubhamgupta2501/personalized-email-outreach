import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'; // Import Home icon
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleHomeButtonClick = () => {
        navigate('/');
    };

    return (
        <Box display="flex" alignItems="center" py={3} bgcolor="#00304b" color="white">
            <Box>
                <Button className="home-icon" variant="text" color="inherit" startIcon={<HomeIcon />} onClick={handleHomeButtonClick}>
                    Home
                </Button>
            </Box>
            <Typography variant="h4" flexGrow={1} textAlign="center">
                Personalized Email Outreach
            </Typography>
        </Box>
    );
};

export default Header;
