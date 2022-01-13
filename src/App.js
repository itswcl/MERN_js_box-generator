import './App.css';
import React, { useState } from 'react'

import Form from './components/Form';
import Display from './components/Display';


function App() {
  const [colorInfo, setColorInfo] = useState({
    colors: [],
    sizes: []
  })

  const colorReceived = (color, size) => {
    setColorInfo({
      colors : [...colorInfo.colors, color],
      sizes : [...colorInfo.sizes, size]
    })
  }

  return (
    <div className="App">
      <Form onNewColor={colorReceived}/>
      <Display colors={colorInfo.colors} sizes={colorInfo.sizes}/>
    </div>
  );
}

export default App;
