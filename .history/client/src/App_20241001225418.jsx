import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');


  const AddCount = () => {
    setCount(count + 1);
  };

  const AddText = (e) => {
    setText(e.target.value)
  };



  return (
    <>
      <p>{count}</p>
      <button onClick={() => AddCount()}>+</button>
      <br/>
      <input value={text} onChange={(e) => AddText(e.target.value)}/>
    </>
  );
};

export default App;
