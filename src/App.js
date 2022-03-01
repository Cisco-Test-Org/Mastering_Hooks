import { useState } from 'react';
import './App.css';
import HookCounter from './compopnents/HookCounter';
import HookCounter2 from './compopnents/HookCounter2';
import HookCounter3 from './compopnents/HookCounter3';

function App() {

  return (
    <div className="App">
      <HookCounter />
      <hr/>
      <HookCounter2 />
      <hr/>
      <HookCounter3 />
    </div>
  );
}

export default App;

// Rules of Hooks
// * dont call hooks inside loops, conditions, or nested functions.
// * only call hooks from react functions.
