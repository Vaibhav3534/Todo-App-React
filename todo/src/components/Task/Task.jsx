import React, {useEffect} from 'react';
import styled from 'styled-components';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';

import moment from 'moment';
import taskManager from '../../helper/taskManager';

const TaskItem = styled.li`

    list-style: none;
    width: 100%;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em;
    border-radius: 4px;

    .task-details {

        text-decoration: unset;
        cursor: pointer;

        .completed-icon{
            font-size: 1rem;
        }

        p {
            font-size: 1.2rem;
            font-weight: bold;
        }

        span {
            font-size: .8rem;
        }
    }

    .completed {
        ${'' /* text-decoration: line-through; */}
        backgroundColor: green;
        color:green
    }

    .task-cta{
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        #edit-btn{
            color: green;
        }

        #delete-btn{
            color: red;
        }
    }
`

function Task({setTASKS, name, edited_at, completed, created_at, theme, setOpenEditModal, setEditTaskValue, setSelectedTask, hidden, searchValue}) {

    const handleOpen = () => setOpenEditModal(true);

    const handleComplete = () => {
        const res = taskManager("COMPLETE_TASK", {name});
        setTASKS(JSON.parse(res));
    }

    const DarkModeBox = {
        background: theme === "light" ? "var(--bg-task, lightblue)" : "var(--bg-task-dark, lightblue)",
        display: "flex",
    }

    const handleEdit = (value) => {
        handleOpen();
        setEditTaskValue(value);
        setSelectedTask(name)
    }

    const handleDelete = (name) => {
        const res = taskManager("DELETE_TASK", {name});
        setTASKS(JSON.parse(res));
    }

    useEffect(() => {
        DarkModeBox.display = searchValue ? (hidden ? "flex" : "none") : "flex";
    }, [searchValue])

    return (
        <TaskItem style={DarkModeBox}>
            <div 
                className="task-details"
                onClick={handleComplete}
            >
                <p className={completed ? "completed all-tasks" : "all-tasks"}>{completed ? <DoneIcon className="completed-icon" /> : ""}{name}</p>
                <span>{moment(created_at).calendar()} • Last Edited: {moment(edited_at).fromNow()}</span>
            </div>
            <div className="task-cta">
                <Tooltip title="Edit" arrow>
                    <IconButton
                        onClick={() => handleEdit(name)}
                    >
                        <EditIcon id="edit-btn" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete" arrow>
                    <IconButton
                        onClick={() => handleDelete(name)}
                    >
                        <DeleteIcon id="delete-btn" />
                    </IconButton>
                </Tooltip>
            </div>
        </TaskItem>
    )
}

export default Task;
