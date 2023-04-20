import React from 'react'
import './Skills.css'
import Html5 from './icons/html.jpg'
import Css3 from './icons/css.png'
import JS from './icons/js.jpg'
import react from './icons/reactjs.png'
import Redux from './icons/redux.jpg'
import Bootstrap from './icons/bootstrap.jpg'
import Ajax from './icons/ajax.jpg'
import Cpp from './icons/cpp.jpg'
import Nodejs from './icons/nodejs.jpg'
import Mongodb from './icons/mongodb.jpg'
import Express from './icons/express.jpg'
function Skills() {
  
    return (
        <div className="skills_parentdiv">
            <h2 className='skills_parentdiv_firsth2'>SKILLS</h2>

            <div className='skills_parentdiv_firstdivchilds'>
                <h2>Front End Technologies</h2>
                <ul className='skills_ul'>
                    <li><p>HTML5</p>
                        <img className="skills_img" src={Html5} alt=""></img>
                    </li>
                    <li><p>CSS3</p>
                        <img className="skills_img" src={Css3} alt=""></img>
                    </li>
                    <li><p>JAVASCRIPT</p>
                        <img className="skills_img" src={JS} alt=""></img>
                    </li>
                    <li><p>REACTJS</p>
                        <img className="skills_img" src={react} alt=""></img>
                    </li>
                    <li><p>REDUX</p>
                        <img className="skills_img" src={Redux} alt=""></img>
                    </li>
                    <li><p>BOOTSTRAP</p>
                        <img className="skills_img" src={Bootstrap} alt=""></img>
                    </li>
                    <li><p>AJAX</p>
                        <img className="skills_img" src={Ajax} alt=""></img>
                    </li>
                </ul>
            </div>
            <div className='skills_parentdiv_firstdivchilds'>
                <h2>Backened End Technologies</h2>
                <ul className='skills_ul'>
                    <li><p>NODEJS</p>
                        <img className="skills_img" src={Nodejs} alt=""></img>
                    </li>
                    <li><p>EXPRESSJS</p>
                        <img className="skills_img" src={Express} alt=""></img>
                    </li>
                    <li><p>MONGODB</p>
                        <img className="skills_img" src={Mongodb} alt=""></img>
                    </li>
                </ul>
            </div>
            <div className='skills_parentdiv_firstdivchilds'>
                <h2>Languages </h2>
                <ul className='skills_ul'>
                    <li><p>C++</p>
                        <img className="skills_img" src={Cpp} alt=""></img>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Skills