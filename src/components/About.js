import React, {useState} from "react";
//importing images 

function About(){
    const headers = {
        heading1: "About Me",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
        // image: man,
        heading2: "Hi there",
        about:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    };
    return (
        <div className="container__about" id="about">
          <div className="aboutMe">
            <h1 className="header__aboutme">{headers.heading1}</h1>
            <p>{headers.text}</p>
          </div>
        </div>
      );
};

export default About; 