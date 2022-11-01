import React from 'react';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { styled as ms } from '@mui/material/styles';
import taskManager from '../../helper/taskManager';

const Modal = styled.div`
    ${'' /* display: none; */}
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

const Flexed = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
`

const EditButton = ms(Button)((theme) => ({
    
}));

const CancelButton = ms(Button)((theme) => ({
    color: "#fff",
    background: "#f006",
    borderColor: "#f006",
    "&:hover": {
        background: "#f008",
        borderColor: "#f008",
    }
}))

const EditForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 80%;
    margin: 12px auto;
`

function EditTaskModal({setTASKS, openEditModal, setOpenEditModal, editTaskValue, setEditTaskValue, selectedTask, setSelectedTask}) {

    const handleClose = () => setOpenEditModal(false);
    

    const handleEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if(!editTaskValue) return alert("value cannot be empty")
        const res = taskManager("EDIT_TASK", {newName: editTaskValue, name: selectedTask})
        setTASKS(JSON.parse(res))
        handleClose();
    }

    const openModalStyles = {
        display: openEditModal ? "block" : "none",
    }

    return (
        <Modal style={openModalStyles}>
            <div>
                <h2>Edit Task</h2>
            </div>
            <EditForm
                onSubmit={(e) => handleEdit(e)}
            >
                <TextField 
                    label="Edit task"
                    value={editTaskValue}
                    onChange={(e) => {setEditTaskValue(e.target.value)}}
                    autoFocus
                />
                <Flexed>
                    <EditButton 
                        variant="contained"
                        type="submit"
                        onClick={(e) => handleEdit(e)}
                    >Edit</EditButton>
                    <CancelButton 
                        variant="outlined"
                        type='button'
                        onClick={handleClose}
                    >Cancel</CancelButton>
                </Flexed>
            </EditForm>
        </Modal>
    )
}

export default EditTaskModal;
