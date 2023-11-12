import React, { useState } from 'react';
import { Container, Paper, Button, IconButton } from '@mui/material';
import PromptInput from './components/PromptInput';
import Header from './components/Header';
import Footer from './components/Footer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import GeneratedEmailPage from './components/GeneratedEmailPage';
import { CircularProgress } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile'; // Import AttachFileIcon
import AddIcon from '@mui/icons-material/Add'; // Import AddIcon
import './App.css';

function Main({ onGenerateEmail }) {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const generateEmail = async () => {
        
        if (isLoading) return;

        setIsLoading(true); // Start loading
        try {
            const responseData = await onGenerateEmail(prompt);
            navigate('/generated-email', { state: { generatedEmail: responseData.generated_email } });
        } catch (error) {
            console.error('Failed to generate email:', error);
        }
        setIsLoading(false); // Stop loading when the request is complete or fails
    };

  return (
    <Container maxWidth="md" className="page-container">
      <Paper elevation={3} className="paper">
        <PromptInput prompt={prompt} setPrompt={setPrompt} />
        <div className="generate-button-div">
        <div className="button-icons">
                        <IconButton>
                            <AttachFileIcon /> {/* Add an icon for attaching a file */}
                        </IconButton>
                        <IconButton>
                            <AddIcon /> {/* Add an icon for adding recipients */}
                        </IconButton>
        </div>
          <Button
            variant="contained"
            color="primary"
            onClick={generateEmail}
            className="generate-button"
            startIcon={<ArrowForwardIcon />}
            disabled={isLoading} 
          >
            Generate Email
          </Button>
        </div>
        {isLoading && (
                    <div className="loader">
                        <CircularProgress /> {/* Show a loader when isLoading is true */}
                    </div>
                )}
      </Paper>
    </Container>
  );
}

function App() {
  const [generatedEmail, setGeneratedEmail] = useState('');


  const handleGenerateEmail = async (prompt) => {
    // Prepare the data to send to the backend
    const data = {
        prompt: prompt,
    };

    // Make a POST request to your FastAPI backend
    const response = await fetch('http://localhost:8000/generate-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});

    if (response.ok) {
        const responseData = await response.json();
        return responseData; // Return the response data for use in navigate
    } else {
        console.error('Failed to generate email');
        return {}; // Return empty object if the call fails
    }
};


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main onGenerateEmail={handleGenerateEmail} />} />
        <Route path="/generated-email" element={<GeneratedEmailPage emailContent={generatedEmail}/>}  />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;