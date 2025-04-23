import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeBackground = () => {
    // Random color generator
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  };
  
  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', textAlign: 'center', paddingTop: '100px' }}>
      <h1>Click the button to change background color!</h1>
      <button 
        onClick={changeBackground} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#333',
          color: 'white'
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default App;
