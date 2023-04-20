import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import man from "./photos/man1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// import gaganimg1 from './photos/gaganimg1.jpeg'
// import gaganimg2 from './photos/gaganimg2.jpeg'
// import gaganimg3 from './photos/gaganimg3.jpeg'
import './Nav.css'

function Nav() { 
    const [count,setcount]=useState(true);
    const ToggleNavbar=()=>{
   setcount(!count);
  }
    
    return (
        <div>
        <div className='fontawesome_icon' onClick={ToggleNavbar}>  
        <FontAwesomeIcon icon={faBars} style={{
            color: "white",
            width: "25px",
            height: "25px"
        }}/>
        </div>
        <div className={count===true?'nav_div_active':"nav_div_inactive"} id='nav_div' >
            <div className="navintro">
                <img className='imgnav' src={man} alt=''></img>
                <h3 style={{
                    marginTop: "10px",
                    color: "yellow"
                }}>GAGAN SINGH</h3>
                <p style={{
                    marginTop: "10px",
                    color: "yellow"
                }}>Full Stack Developer</p>
            </div>
            <ul className="nav_ul">
                <li><Link onClick={ToggleNavbar} to="Portfolio_website/">Home</Link></li>
                <li><Link onClick={ToggleNavbar} to="Portfolio_website/skills">Skills</Link></li>
                <li><Link onClick={ToggleNavbar} to="Portfolio_website/projects">Projects</Link></li>
            
            </ul>
            <div className="footer">
            All copyrights&copy; reserved 2023
        </div>
        </div>
        </div>
    )
}
export default Nav