import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import Header from './Header.jsx'
import Home from './Home.jsx';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Stats from './Stats.jsx';
import About from './About.jsx';
import NightWave from './NightWave.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Router>
    <Header className="justify-center" />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stats' element={<Stats/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/nightwave' element={<NightWave/>} />
    </Routes>
  </Router>
  
)
