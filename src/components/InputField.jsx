import React, { useState } from 'react';

function InputField({ onUserInput, onVoiceInput }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onUserInput(input);
      setInput(''); // Clear input after submission
    }
  };

  return (
    <div className="input-field">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your query..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <button onClick={onVoiceInput}>🎤 Voice Input</button>
    </div>
  );
}

export default InputField;
