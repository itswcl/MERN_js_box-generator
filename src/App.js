import './App.css';
import { useState } from 'react'

import Form from './components/Form';
import Display from './components/Display';


function App() {
  // main state
  const [colorInfo, setColorInfo] = useState({
    colors: [],
    sizes: []
  })

  // useState([{}, {}, {}])


  // main function
  const colorReceived = (color, size) => {
    setColorInfo({
      // in colorInfo Obj we copy all previous and append the new color and size in the end
      colors: [...colorInfo.colors, color],
      sizes: [...colorInfo.sizes, size]
    })
  }

  return (
    <div className="App">
      <h1>Color Box</h1>
      <Form onNewColor={colorReceived} />
      <Display colors={colorInfo.colors} sizes={colorInfo.sizes} />

      { /*
      { we can do this as well when we just want to pass all in split instead of all at once
        colorInfo.map((info, idx) => {
          return <Display color={info.color} size={info.size} key={idx}/>
        })
      } */}
    </div>
  );
}

export default App;
