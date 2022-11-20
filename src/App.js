import  {useState} from 'react' 
import React from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>{count}</h2>
        <div>
            <button onClick={()=>setCount(count+1) }> increment</button>
            <button  onClick={()=>setCount(count-1) }> decrement</button>
        </div> 
    </div>
  );
}

export default App;
 