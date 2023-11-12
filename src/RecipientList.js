import React from 'react';
import { Grid, TextField, Button, List, ListItem } from '@mui/material';
import RecipientChip from './RecipientChip';

function RecipientList({ recipientNames, removeRecipient, newRecipient, setNewRecipient, addRecipient }) {
    return (
        <Grid container spacing={2} alignItems="center" className="recipient-grid">
            <Grid item xs={8}>
                <TextField
                    id="newRecipient"
                    label="Add Recipient"
                    variant="outlined"
                    fullWidth
                    value={newRecipient}
                    onChange={(e) => setNewRecipient(e.target.value)}
                    className="recipient-input"
                />
            </Grid>
            <Grid item xs={4}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addRecipient}
                    fullWidth
                    className="add-button"
                >
                    Add Recipient
                </Button>
            </Grid>
            {recipientNames.length > 0 && (
                <List className="recipient-list">
                    <ListItem className="recipient-item">
                        {recipientNames.map((name, index) => (
                            <RecipientChip key={index} name={name} onDelete={() => removeRecipient(index)} />
                        ))}
                    </ListItem>
                </List>
            )}
        </Grid>
    );
}

export default RecipientList;
