import React from 'react';
import { Chip } from '@mui/material';

function RecipientChip({ name, onDelete }) {
    return (
        <Chip label={name} onDelete={onDelete} color="primary" className="recipient-chip" />
    );
}

export default RecipientChip;
