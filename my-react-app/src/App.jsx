import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Store from './component/Store';
import Header from './component/Header';
import ContextProvider from './context/ContextProvider';
function App() {
 return (
    <div>
    <ContextProvider>
    <Router>
  <Header/>
   <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/store" element={<Store/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
</Router>
    </ContextProvider>
    
    
    </div>
  )
}

export default App
