import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return 
  <>
  <div className="count">
    {count}
  </div>
  </>
  ;
};

export default App;
