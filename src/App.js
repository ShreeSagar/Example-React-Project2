import React from 'react';
import './App.css';
import FunctionalComp from './Components/FunctionalComp.js';
import ClassComp from './Components/ClassComp.js';
import Click from './Components/Click.js';
function App() {
  return (
    <div className="App">
      <h1>Welcome to react app</h1>
      <FunctionalComp />
      < ClassComp/>
      <Click/>
    </div>
  );
}

export default App;
