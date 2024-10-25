import { useState, useContext } from "react";
import { CounterContex } from "./components/Contex"



function App() {
      
  const [count, setCount] = useState(0); 

  return (
      <CounterContex.Provider value={count}> 
          <Count setCount={setCount} />
      </CounterContex.Provider>
  );
  
}
 
// eslint-disable-next-line react/prop-types
const Count = ({ setCount }) => {
  return (
      <div>
          <CountRender /> {/* Render the current count */}
          <Button setCount={setCount} /> {/* Render the buttons */}
      </div>
  );
}
const CountRender = () => {
  const count = useContext(CounterContex); // Access the count from context
  return <div>{count}</div>; // Display the current count
}

// eslint-disable-next-line react/prop-types
const Button = ({ setCount }) => {
  const count = useContext(CounterContex); 
  return (
      <div>
          <button onClick={() => setCount(count + 1)}>
          Increment
          </button> 
          <button onClick={() => setCount(count - 1)}>
          Decrement
          </button> 
      </div>
  );
}

export default App
