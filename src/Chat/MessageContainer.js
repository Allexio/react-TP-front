import React from 'react';

const MessageContainer = ({
  messages = []
}) => {

  return (
    <div style={{ height: '100%' }}>
      {
        messages.map((m, index) => (
          <p key={index}>{m.content}</p>
        ))
      }
    </div>
  );
};

export default MessageContainer;
