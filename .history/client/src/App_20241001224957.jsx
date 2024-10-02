import "./App.css";
import {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return<>
  {count}
  </>
};

export default App;
