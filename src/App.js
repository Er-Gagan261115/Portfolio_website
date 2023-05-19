import './App.css';
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Skills from './components/Skills.js'
import ProjectCards from './components/ProjectCards.js';


import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
 

  return (
    <div className="App"> 
      <div className="nav_pages">
        <BrowserRouter >
          <Nav />
          <Routes>
            <Route path='Portfolio_website/'  element={<Home />} />
            <Route path='Portfolio_website/skills'  element={<Skills />} />
            <Route path='Portfolio_website/projects'  element={<ProjectCards />} />
      
          </Routes>
        </BrowserRouter>
       
      </div>
    </div>
  );
}

export default App;
