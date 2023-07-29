import React from "react";
import './Home.css'
import './Nav.css'

function Home(props) {


    const download_onclick = () => {
        fetch("resume.pdf").then(response => {
            response.blob().then(blob => {
                const blobUrl = window.URL.createObjectURL(blob)
                const anchor = document.createElement("a");
                anchor.href = blobUrl;
                anchor.setAttribute("download", "CV.pdf");
                document.body.appendChild(anchor);
                anchor.click();
                // anchor.remove();
            })
        })

    }
    return (
        <div className="Home_parent_div">
            <div className="above_back_imghome"  >

                <div className= "home_icons_div">
                    <p className="home_icons home_icons_div_fchild">
                        <img className="imglogo" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" alt="" />
                        <b>gagan261115@gmail.com</b>
                    </p>
                    <p className="home_icons home_icons_div_schild ">
                        <img className="imglogo" src="https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png" alt="" />
                        <b> 8931075977</b>
                    </p>
                    <p className="home_icons home_icons_div_tchild ">
                    <img className="imglogo" src="https://pngimg.com/uploads/github/github_PNG40.png" alt="" /> 
                        <a href="https://github.com/Er-Gagan261115?tab=repositories" target="_blank" ><b>Github</b></a>
                    </p>

                </div>

                <div className="desc_button">
                    <h3 className="mydesc_home">
                         MERN Stack
                        <br />  Developer
                    </h3>
                    <button className="download_button"
                        onClick={download_onclick}
                    >
                        Download CV
                    </button>
                </div>
            </div>

        </div>
    );
}
export default Home;
