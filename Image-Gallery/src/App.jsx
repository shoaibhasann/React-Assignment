import React from 'react'
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';


function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Detail/>}/>
      </Routes>
    </Router>
  )
}

export default App