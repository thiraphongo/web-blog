import { BroserRouter, Routes, Route } from 'react-router-dom'
import App from './App';

const MyRoute = () => {
 

  return (
    <BroserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
    </Routes>
    </BroserRouter>
  );
};

export default MyRoute;
