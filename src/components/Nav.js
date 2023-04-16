import React from 'react'
import { Link } from 'react-router-dom'
import man from "./photos/man1.jpg"

// import gaganimg1 from './photos/gaganimg1.jpeg'
// import gaganimg2 from './photos/gaganimg2.jpeg'
// import gaganimg3 from './photos/gaganimg3.jpeg'
import './Nav.css'

function Nav(props) { 
    
    return (
        <div className={props.count===true?'nav_div_active':"nav_div_inactive"} id='nav_div' >
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
                <li><Link  to="/">Home</Link></li>
                <li><Link  to="/skills">Skills</Link></li>
                <li><Link  to="/projects">Projects</Link></li>
            
            </ul>
            <div className="footer">
            All copyrights&copy; reserved 2023
        </div>
        </div>
    )
}
export default Nav