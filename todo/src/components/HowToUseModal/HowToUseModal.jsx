import React from 'react';
import styled from 'styled-components';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Button } from '@mui/material';

const HTUModal = styled.div`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--bg-modal);
    padding: 1em;
    width: clamp(300px, 100%, 320px);
    border-radius: 12px;
    text-align: center;
    z-index: 3;
`

function HowToUseModal({openHTUModal, setOpenHTUModal}) {

    const handleClose = () => setOpenHTUModal(false);

    const openModalStyles = {
        display: openHTUModal ? "block" : "none",
    }

    return (
        <HTUModal style={openModalStyles}>
            <h1>How to Use?</h1>
            <List>
                <ListItem>
                    <ListItemIcon><AddIcon /></ListItemIcon>
                    <ListItemText>Use the add task input to add new tasks.</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><ManageSearchIcon /></ListItemIcon>
                    <ListItemText>Search Existing Tasks with the search task input.</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><CheckIcon /></ListItemIcon>
                    <ListItemText>Simply click On the task to mark as completed. The Text will be strikethrough.</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><DeleteIcon /></ListItemIcon>
                    <ListItemText>Simply click on the trash icon to delete the task.</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon><EditIcon /></ListItemIcon>
                    <ListItemText>Click on the edit icon to edit a task.</ListItemText>
                </ListItem>
            </List>
            <Button 
                variant='contained'
                onClick={handleClose}
            >Okay!</Button>
        </HTUModal>
    )
}

export default HowToUseModal;
