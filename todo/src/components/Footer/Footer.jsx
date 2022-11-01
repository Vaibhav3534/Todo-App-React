import React from 'react';
import styled from 'styled-components';

import HowToUseModal from "../HowToUseModal/HowToUseModal";
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const Container = styled.footer`
    
    margin-top: auto;
    text-align: center;

    #help-btn{
        cursor: pointer;
    }

    .light{
        color: #000;
    }

`

const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    background: #0004;
    z-index: 2;
    position: fixed;
    inset: 0;
`

function Footer({theme, openHTUModal, setOpenHTUModal, openEditModal, setOpenEditModal}) {

    const handleOpen = () => setOpenHTUModal(true);
    const handleClose = () => {
        setOpenHTUModal(false);
        setOpenEditModal(false);
    };

    const openModalStyles = {
        display: openHTUModal || openEditModal ? "block" : "none",
    }

    return (
        <Container>
            <Overlay 
                style={openModalStyles}
                onClick={handleClose}
            />
            <Tooltip title="Help" arrow>
                <IconButton onClick={handleOpen}>
                    <HelpIcon 
                        id="help-btn" 
                        className={theme === "light" ? "" : "light"}
                    />
                </IconButton>
            </Tooltip>
            <HowToUseModal 
                openHTUModal={openHTUModal}
                setOpenHTUModal={setOpenHTUModal}
            />
        </Container>
    )
}

export default Footer;
