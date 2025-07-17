import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Procedure from './components/Procedure';
import Signup from './components/Signup';
import Login from './components/Login';
import Data from './components/Data'
import Sendmssg from './components/Sendmssg';
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procedure" element={<Procedure />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<Data/>} />
        <Route path="/sendmssg" element={<Sendmssg/>}></Route>
      </Routes>
    </Router>
  );
}
