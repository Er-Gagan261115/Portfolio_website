import { useState } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Skills from './components/Skills.js'
import ProjectCards from './components/ProjectCards.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
 
  const [count,setcount]=useState(true);
    const ToggleNavbar=()=>{
   setcount(!count);
  }
  return (
    <div className="App">
        <div className='fontawesome_icon' onClick={ToggleNavbar}>  
                <FontAwesomeIcon icon={faBars} style={{
                    color: "white",
                    width: "25px",
                    height: "25px"
                }}/>
                </div>
      <div className="nav_pages">
        <BrowserRouter >
          <Nav count={count} />
          <Routes>
            <Route path='Portfolio_website/'  element={<Home count ={count}/>} />
            <Route path='Portfolio_website/skills'  element={<Skills count={count} />} />
            <Route path='Portfolio_website/projects'  element={<ProjectCards  count={count} />} />
      
          </Routes>
        </BrowserRouter>
       
      </div>
    </div>
  );
}

export default App;
