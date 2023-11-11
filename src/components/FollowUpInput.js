import React, { useState, useEffect } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function FollowUpInput({ prompt, setPrompt }) {
    const placeholderText = "Ask a follow up question?";
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
                    rows={2}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    InputProps={{
                        disableUnderline: true, // Hide the underline
                        className: "prompt-input",
                        endAdornment: (
                            <InputAdornment position="end" className="input-adornment">
                                <ArrowForwardIcon />
                            </InputAdornment>
                        )
                    }}
                    className="prompt-field"
                />
            </div>
        );
}

export default FollowUpInput;
