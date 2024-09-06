import React from 'react';

function ChatBox({ messages }) {
  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <div
          key={index}
          className={message.role === 'user' ? 'user-message' : 'bot-message'}
        >
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatBox;
