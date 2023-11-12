import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

function PromptInput({ prompt, setPrompt }) {
    const placeholderText = "Hello! How can I assist you today?";
    const [animationText, setAnimationText] = useState('');

    useEffect(() => {
        let animationTimeout;
        let currentIndex = 0;

        const addNextLetter = () => {
            if (currentIndex < placeholderText.length) {
                setAnimationText(placeholderText.slice(0, currentIndex + 1));
                currentIndex++;
                animationTimeout = setTimeout(addNextLetter, 100); // Adjust the delay as needed
            }
        };

        animationTimeout = setTimeout(addNextLetter, 50); // Start the animation

        return () => {
            clearTimeout(animationTimeout);
        };
    }, []);

    return (
        <div className="prompt-container">
            <TextField
                id="prompt"
                placeholder={animationText}
                variant="filled"
                fullWidth
                multiline
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                InputProps={{
                    disableUnderline: true, // Hide the underline
                    className: "prompt-input"
                }}
                className="prompt-field"
            />
        </div>
    );
}

export default PromptInput;
