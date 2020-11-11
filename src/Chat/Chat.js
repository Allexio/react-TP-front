import React, { useEffect, useState, useCallback } from 'react';
import socketIOClient from 'socket.io-client';

import {
  Grid,
  TextField
} from '@material-ui/core';

import InputMessage from './InputMessage';
import MessageContainer from './MessageContainer';
import ItemChannel from './ItemChannel';

import './Chat.css';
const ENDPOINT = "176.169.89.154:8080";

const Chat = ({
  infos: {
    username = '',
    desc = ''
  }
}) => {
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const options = {
      query: {
        name: username,
        desc
      }
    };
    const socket = socketIOClient(ENDPOINT, options);

    socket.on('users', (users) => {
      setUsers(users);
    });

    socket.on('messages', (messages) => {
      setMessages(messages);
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket !== null) {
      socket.on('message', (newMessage) => {
        setMessages([...messages, newMessage]);
      });
    }
  }, [socket, messages]);

  const sendMessage = useCallback((message) => {
    const messageDTO = {
      from: username,
      content: message,
    };

    socket.emit('message', messageDTO);
  }, [socket, username]);

  return (
    <Grid
      className="container"
      xs={12}
      container
    >
      <Grid 
        xs={12}
        className="tab-bar"
      >

      </Grid>
      <Grid
        className="section bots-section"
        xs={3}
      >
        {
          users.map((u) => 
            <ItemChannel
              key={u.id}
              name={u.name}
              desc={u.desc}
            />
          )
        }
      </Grid>
      <Grid
        className="section"
        xs={9}
      >
        <MessageContainer
          messages={messages}
        />
        <InputMessage
          sendMessage={sendMessage}
        />
      </Grid>
    </Grid>
  )
};

export default Chat;
