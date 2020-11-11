import React, { useState, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Chat from './Chat/Chat';

function App() {
  const [connected, setConnected] = useState(false);
  const [infos, setInfos] = useState({});

  const send = useCallback((infos) => {
    setInfos(infos);
    setConnected(true);
  }, []);

  return (
    <>
      {
        connected ? (
          <Chat 
            infos={infos}
          />
        ) : (
          <Login
            send={send}
          />
        )
      }
    </>
  );
}

export default App;
