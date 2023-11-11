// EmailTemplate.js
import React from 'react';
import './App.css'; // Import the App.css file

function EmailTemplate({ children }) {
    return (
        <div>
            <header>
                <h1>Personalized Email Outreach</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>Copyright © 2023 Your Company</p>
            </footer>
        </div>
    );
}

export default EmailTemplate;
