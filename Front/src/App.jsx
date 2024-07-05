import React from 'react'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
// import Landing from './Components/Landing';
import LandingPage from './Components/Landing';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path ="/" element={<LandingPage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App

