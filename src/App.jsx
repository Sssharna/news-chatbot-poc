import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ChatBox from './components/ChatBox';
import { listenForSpeech } from './api/speech';
import { getAIResponse } from './api/openai';

function App() {
  const [messages, setMessages] = useState([]);

  // Handle user input and get AI response
  const handleUserInput = async (input) => {
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    const aiResponse = await getAIResponse(input); // Get AI response from OpenAI API
    const botMessage = { role: 'bot', content: aiResponse };

    setMessages((prev) => [...prev, botMessage]);
  };

  // Handle voice input through the Web Speech API
  const handleVoiceInput = async () => {
    const speech = await listenForSpeech();
    if (speech) {
      handleUserInput(speech);
    }
  };

  return (
    <div className="app">
      <h1>News Chatbot POC</h1>
      <ChatBox messages={messages} />
      <InputField onUserInput={handleUserInput} onVoiceInput={handleVoiceInput} />
    </div>
  );
}

export default App;
