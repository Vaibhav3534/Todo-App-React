import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import taskManager from '../../helper/taskManager';
import { TaskSharp } from '@mui/icons-material';

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .search-icon{
        position: absolute;
        bottom: 4px;
        right: 0;
        transition: all 250ms;
    }

    #active{
        transform: rotate(20deg);
    }

`


function SearchTaskInput({theme, TASKS, setTASKS, searchValue, setSearchValue}) {

    const [iconPlace, setIconPlace] = useState("");

    const handleIconFocus = (e) => {
        e.stopPropagation();
        setIconPlace("active")
    }

    const handleIconFocusOut = (e) => {
        setIconPlace("");
        setSearchValue("")
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {


        const doSearch = () => {
            const res = taskManager("SEARCH_TASK", {searchValue})
            setTASKS(JSON.parse(res));
        }

        const defaultState = () => {
            if(!TASKS) return 
            setTASKS((tasks) => {
                return tasks.map(task => {
                    task.hidden = false;
                    return task;
                })
            })
        }

        defaultState();
        searchValue ? doSearch() : defaultState();

        doSearch();
    }, [searchValue])

    return (
        <Container>
            <TextField 
                label="Search Tasks" 
                variant="standard"
                value={searchValue} 
                onFocus={handleIconFocus}
                onBlur={handleIconFocusOut}
                onChange={handleSearch}
            />
            <SearchIcon className="search-icon" id={iconPlace !== "active" ? "active" : ""} />
        </Container>
    )
}

export default SearchTaskInput;
