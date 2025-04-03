import React, { useState } from 'react';
import './ChatBot.css';


function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Speech Recognition
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  // Text-to-Speech
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  };

  // OpenAI API Call
  const fetchAIResponse = async (userInput) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer `,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a software engineering interviewer.' },
          { role: 'user', content: userInput },
        ],
      }),
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
  };

  // Handle Text Input
  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput('');

      const aiResponse = await fetchAIResponse(input);
      setMessages((prev) => [...prev, { text: aiResponse, user: false }]);
      speak(aiResponse);
    }
  };

  // Handle Speech Input
  const startListening = () => {
    recognition.start();
  };

  recognition.onresult = async (event) => {
    const userSpeech = event.results[0][0].transcript;
    setMessages([...messages, { text: userSpeech, user: true }]);

    const aiResponse = await fetchAIResponse(userSpeech);
    setMessages((prev) => [...prev, { text: aiResponse, user: false }]);
    speak(aiResponse);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user ? 'chat-message user' : 'chat-message bot'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={startListening}>🎤 Speak</button>
      </div>
    </div>
  );
}

export default ChatBot;
