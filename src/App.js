import './App.css';
import React, {useState} from 'react'

import Form from './components/Form';
import Display from './components/Display';


function App() {
  const [colorInfo, setColorInfo] = useState("No Color")

  const colorReceived = ( newColor ) => {
    setColorInfo( newColor );
  }

  return (
    <div className="App">
      <Form onNewColor={ colorReceived } />
      <Display color={colorInfo} />
    </div>
  );
}

export default App;
