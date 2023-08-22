import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import Landing from './Landing';
import Signup from './component/Signup';
import Home from './component/Home'
import Details from './component/Details'
function App() {
  return (
  <div className="App">
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='login' element={<Login />} ></Route>
      <Route path='signup' element={<Signup />} ></Route>
      <Route path='home' element={<Home />}></Route>
      <Route path='details' element={<Details />}> </Route>
    </Routes>      
    </div>
  );
}

export default App;
