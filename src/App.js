import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/login' element={<Login/>}/>
        <Route path ='/register' element={<Register/>}/>
        <Route path ='/dashboard' element={<Dashboard/>}/>
        <Route path ='/projects' element={<Projects/>}/>

        </Routes>
      
    </div>
  );
}

export default App;
