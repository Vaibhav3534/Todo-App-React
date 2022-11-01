import React from 'react';
import styled from 'styled-components';

import Task from '../Task/Task';

const TaskCollection = styled.ul`

    width: clamp(280px, 100%, 720px);
    
`

function TaskList({TASKS, setTASKS, theme, openEditModal, setOpenEditModal, editTaskValue, setEditTaskValue, selectedTask, setSelectedTask, searchValue}) {
    return (
        <TaskCollection>
            {
                TASKS.map((task, index) => (
                    <Task
                        key={index} 
                        name={task.name}
                        completed={task.completed}
                        created_at={task.created_at}
                        edited_at={task.edited_at}
                        hidden={task.hidden}
                        theme={theme}
                        openEditModal={openEditModal}
                        setOpenEditModal={setOpenEditModal}
                        editTaskValue={editTaskValue}
                        setEditTaskValue={setEditTaskValue}
                        TASKS={TASKS}
                        setTASKS={setTASKS}
                        selectedTask={selectedTask}
                        setSelectedTask={setSelectedTask}
                        searchValue={searchValue}
                    />
                ))
            }
        </TaskCollection>
    )
}

export default TaskList;
