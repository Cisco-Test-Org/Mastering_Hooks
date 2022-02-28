import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(10)

  const [{count1, count2}, setCount2] = useState({count1: 3, count2:4})

  return (
    <div className="App">
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <h1>{count}</h1>
      </div>
      <hr/>
      <div>
        <button onClick={() => setCount2(currentState => ({...currentState, count1: currentState.count1 + 1}))}>Increment count1</button>
        <h1>count1: {count1}</h1>
        <h1>count2: {count2}</h1>
      </div>
    </div>
  );
}

export default App;
