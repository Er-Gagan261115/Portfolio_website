import React from 'react'
import NewsWebsite from './projectvideos/newswebsite.webm'
import fblogin from './projectvideos/facebook login.webm'
import flipkartui from './projectvideos/flipkartuiclone.webm'
import landingpage from './projectvideos/landing page.webm'
import calculator from './projectvideos/calculator.webm'
import Todolist from './projectvideos/to do list.webm'
import TextEditor from './projectvideos/Text Editor.webm'
import Portfolio from './projectvideos/Portfolio.webm'
import Weather from './projectvideos/Weather app.webm'
import Projects from './Projects'
import './Projects.css'
function ProjectCards(props){
    const arr = [ {
        Name:"Portfolio Website",
        link:Portfolio,
        languages:["React.Js"]
    },
    {
        Name:"Weather App",
        link:Weather,
        languages:["React.Js"]
    },
    {
        Name:"Text Editor",
        link:TextEditor,
        languages:["React.Js"]
    },
     {
        Name:"Calculator",
        link:calculator,
        languages:["HTML","CSS","JS"]
    },
    {
        Name:"To Do List",
        link:Todolist,
        languages:["HTML","CSS","JS"]
    },
    {
            Name:"News Website",
            link:NewsWebsite,
            languages:["HTML","CSS","JS"]
        },
        {
            Name:"Facebook Login Page",
            link:fblogin,
            languages:["HTML","CSS"]
        },
        {
            Name:"Flipkart UI",
            link:flipkartui,
            languages:["HTML","CSS"]
        },
        {
            Name:"Landing Page",
            link:landingpage,
            languages:["HTML","CSS"]
        }]
   
       
    return(
        <div className="project_parentdiv_inactive">
        <Projects arr={arr} count={props.count}/>
        </div>
    )
}
export default ProjectCards