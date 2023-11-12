import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Container, Paper, IconButton, Tooltip } from '@mui/material';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import EditIcon from '@mui/icons-material/Edit'; // Import the Edit icon
import FollowUpInput from './FollowUpInput';

const GeneratedEmailPage = () => {
    const location = useLocation();
    const generatedEmail = location.state?.generatedEmail || 'No email generated.';

    // Function to copy the email content to the clipboard
    const copyToClipboard = async () => {
        if ('clipboard' in navigator) {
            await navigator.clipboard.writeText(generatedEmail);
            // You can add a notification/toast here to show that the content was copied
        } else {
            // Fallback for older browsers
            document.execCommand('copy', true, generatedEmail);
        }
    };

    return (
        <Container maxWidth="md" className="email-page-container">
            <Paper elevation={3} className="email-paper">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" className="email-heading">Generated Email</Typography>
                    
                    <Tooltip  placement="top">
                        <IconButton title="Copy email" onClick={copyToClipboard} className="copy-icon">
                            <CopyAllIcon />
                        </IconButton>
                        <IconButton title="Edit email" className="edit-icon">
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Typography variant="body1" className="email-content">{generatedEmail}</Typography>
            </Paper>

            <FollowUpInput />
        </Container>
    );
};

export default GeneratedEmailPage;
