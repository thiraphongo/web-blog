import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(0);


  const AddCount = () => {
    setCount(count + 1);
  };

  const AddText = (e) => {
    
  };



  return (
    <>
      <p>{count}</p>
      <button onClick={() => AddCount()}>+</button>
      <br/>
      <input value={text} />
    </>
  );
};

export default App;
