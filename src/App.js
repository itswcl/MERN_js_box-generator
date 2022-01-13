import './App.css';
import React, { useState } from 'react'

import Form from './components/Form';
import Display from './components/Display';


function App() {
  const [colorInfo, setColorInfo] = useState({
    colors: []
  })

  const colorReceived = (e) => {
    setColorInfo({
      colors : [...colorInfo.colors, e]
    })
  }

  return (
    <div className="App">
      <Form onNewColor={colorReceived} />
      <Display colors={colorInfo.colors} />
    </div>
  );
}

export default App;
