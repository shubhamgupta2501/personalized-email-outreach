import React from 'react';
import { Typography, Box } from '@mui/material';

function GeneratedEmail({ generatedEmail }) {
    const emailStyle = {
        whiteSpace: 'pre-wrap',  // Allow line breaks to wrap the text
        overflowWrap: 'break-word',  // Wrap long words
    };

    return (
        <Box mt={2} className="generated-email-box">
            <Typography variant="h6" className="generated-email-heading">Generated Email:</Typography>
            <pre style={emailStyle} className="generated-email-content">{generatedEmail}</pre>
        </Box>
    );
}

export default GeneratedEmail;
