import './App.css';

import React, { useState, useEffect } from 'react';
import MessageChangeForm from './components/message_change.component';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <MessageChangeForm />
    </div>
  );
}

export default App;
