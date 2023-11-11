import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Container, Paper, Button } from '@mui/material';
import FollowUpInput from './FollowUpInput';

const GeneratedEmailPage = () => {
    const location = useLocation();

    const emailStyle = {
        whiteSpace: 'pre-wrap',  // Allow line breaks to wrap the text
        overflowWrap: 'break-word',  // Wrap long words
    };

    // Use the state if it exists, otherwise default to 'No email generated.'
    const generatedEmail = location.state?.generatedEmail || 'No email generated.';
  
    return (
        <Container maxWidth="md" className="page-container">
            <Box mt={2} className="generated-email-box">
            <Typography variant="h5" className="generated-email-heading">Generated Email</Typography>
            <pre style={emailStyle} className="generated-email-content">{generatedEmail}</pre>
            </Box>

            <FollowUpInput /> {/* Include the FollowUpMessage component */}
        </Container>
        
    );
  };
  
  export default GeneratedEmailPage;
  
