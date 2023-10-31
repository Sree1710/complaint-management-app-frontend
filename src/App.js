import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddComplaint from './Components/AddComplaint';
import Registration from './Components/Registration';
import ViewAllComplaint from './Components/ViewAllComplaint';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login/>} />
        <Route path='/regc' exact element={<Registration/>} />
        <Route path='/addc' exact element={<AddComplaint/>} />
        <Route path='/viewac' exact element={<ViewAllComplaint/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
