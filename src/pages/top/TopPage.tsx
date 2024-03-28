import React from "react";
import logo from "./logo.svg";
import { Counter } from "../../features/counter/Counter";
import "./TopPage.css";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DrawerAppBar from '../../features/drawerAppBar/drawerAppBar';

const TopPage = (): JSX.Element => {

  return (
    <>
    <DrawerAppBar />
    <div className="App">
      <header className="App-header">
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <h1 style={{ fontSize: '2em' }}>React Redux Demo</h1>
        </Box>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
    </>
  );
};

export default TopPage;
