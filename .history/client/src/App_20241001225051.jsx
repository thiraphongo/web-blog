import "./App.css";
import {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const AddCount = () => {
    setCount(count+1)
  }

  return<>
  <p>{count}</p>
  <button>+</button>
  </>
};

export default App;
