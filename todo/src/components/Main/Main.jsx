import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import AddTaskInput from '../AddTaskInput/AddTaskInput';
import TaskList from '../TaskList/TaskList';
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import SearchTaskInput from '../SearchTaskInput/SearchTaskInput';
import Footer from "../Footer/Footer";

const Container = styled.main`
    transition: all 500ms;
    height: 100vh;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    padding: 1em;
    width: 80%;
    height: 100%;
    margin: 0 auto;
`


let TASKS = [
    
];

function Main({theme}) {

    const [allTasks, setAllTasks] = useState(TASKS);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openHTUModal, setOpenHTUModal] = useState(false);
    const [editTaskValue, setEditTaskValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [selectedTask, setSelectedTask] = useState("");

    useEffect(() => {
        const getTasks = () => {
            if(!localStorage.getItem("tasks")) {
                localStorage.setItem("tasks", JSON.stringify(allTasks));
            } else {
                setAllTasks(JSON.parse(localStorage.getItem("tasks")));
            }
        }
        getTasks();
    }, [])

    const DarkModeBox = {
        background: theme === "light" ? "" : "#0006"
    }

    return (
        <Container style={DarkModeBox}>
            <Box>
                <SearchTaskInput 
                    theme={theme}
                    TASKS={allTasks}
                    setTASKS={setAllTasks} 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <AddTaskInput 
                    theme={theme}
                    TASKS={allTasks}
                    setTASKS={setAllTasks} 
                />
                <TaskList 
                    TASKS={allTasks}
                    setTASKS={setAllTasks} 
                    theme={theme}
                    openEditModal={openEditModal}
                    setOpenEditModal={setOpenEditModal}
                    editTaskValue={editTaskValue}
                    setEditTaskValue={setEditTaskValue}
                    selectedTask={selectedTask}
                    setSelectedTask={setSelectedTask}
                    searchValue={searchValue}
                />
                <EditTaskModal 
                    setTASKS={setAllTasks} 
                    theme={theme}
                    openEditModal={openEditModal}
                    setOpenEditModal={setOpenEditModal}
                    editTaskValue={editTaskValue}
                    setEditTaskValue={setEditTaskValue}
                    selectedTask={selectedTask}
                    setSelectedTask={setSelectedTask}
                />
                <Footer 
                    theme={theme} 
                    openHTUModal={openHTUModal}
                    setOpenHTUModal={setOpenHTUModal}
                    openEditModal={openEditModal}
                    setOpenEditModal={setOpenEditModal}
                />
            </Box>
        </Container>
    )
}

export default Main;
