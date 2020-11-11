import React, { useState, useCallback } from 'react';
import {
  TextField,
  Button
} from '@material-ui/core';
import './Login.css';

const Login = ({
  send = () => {},
}) => {
  const [ username, setUsername ] = useState('');
  const [ desc, setDesc ] = useState('');

  const toggleSubmit = useCallback((e) => {
    e.preventDefault();
    if (username === '' || desc === '') {
      return;
    }

    send({
      username,
      desc
    });
  }, [
    desc,
    username
  ]);

  const toggleOnChangeUsername = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const toggleOnChangeDesc = useCallback((e) => {
    setDesc(e.target.value);
  }, []);

  return (
    <div>
      <div class="content">
        <text > Welcome! please enter your username and a quick description to start having fun with catbots. </text>
      </div>
      <div class="content">
        <form onSubmit={toggleSubmit}>
          <div class="content">
          <TextField
            name="Username"
            label="Username"
            onChange={toggleOnChangeUsername}
          />
          <TextField
            name="Description"
            label="Description"
            onChange={toggleOnChangeDesc}
          />
          </div>
          <div class="content">
            <Button 
              variant="contained"
              type="submit"
              color="primary"
            > Submit </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;