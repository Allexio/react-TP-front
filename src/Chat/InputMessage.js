import React, { useCallback, useState } from 'react';
import {
  TextField
} from '@material-ui/core';

const InputMessage = ({
  sendMessage = () => {},
}) => {
  const [message, setMessage] = useState('');

  const toggleSubmit = useCallback((e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  }, [message]);

  const onChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  return (
    <form onSubmit={toggleSubmit}>
      <TextField
        style={{
          position: 'absolute',
          bottom: 0,
          width: '75%'
        }}
        placeholder = 'Enter your message'
        onChange={onChange}
        value={message}
      />
    </form>
  );
}

export default InputMessage;
