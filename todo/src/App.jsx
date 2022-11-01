import React, {useState, useEffect} from "react";
import "./App.css";
import styled from "styled-components";

import Header from './components/Header/Header';
import Main from "./components/Main/Main";

const Container = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;

`

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const getUserTheme = () => {
      if(!localStorage.getItem("theme")){
        localStorage.setItem("theme", theme);
      } else {
        setTheme(localStorage.getItem("theme"))
      }
    }

    getUserTheme();
  }, [])

  useEffect(() => {
    const updateTheme = () => {
      localStorage.setItem("theme", theme);
    }

    updateTheme();
  }, [theme])

  return (
    <Container>
      <Header 
        theme={theme} 
        setTheme={setTheme} 
      />
      <Main 
        theme={theme} 
      />
    </Container>
  );

}

export default App;
