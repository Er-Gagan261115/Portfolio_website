import React from "react"
import './Projects.css'
// import NewsWebsite from './projectvideos/newswebsite.webm'
function Projects(props) {
    // function print(rp){
    //     console.log(rp.NewsWebsite)
    // }
    return props.arr.map((ele, index) => {
        return (
            <div className="project_containers" key={index}>
                <h2>
                    {ele.Name}
                </h2>
                <video style={{
                    borderRadius: "10px",
                    width: "90%",
                    marginTop: "20px"
                }} src={ele.link} controls>
                </video>
                <strong>Built Using:
                    {ele.languages.map((lang) => {
                        return (
                            <span> {lang}   </span>
                        )
                    })}
                </strong>
                {/* <button onClick={()=>{print(ele.link)}}>click</button> */}
            </div>
        )
    })


}
export default Projects;