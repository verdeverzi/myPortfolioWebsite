import React from 'react'
import "./AboutMe.css"
import mypic from "./mypic.jpg"

const AboutMe = () => {
  return (
    <div id="aboutme" className="aboutme-container">
        {/* <img src={mypic}  alt="profile"/> */}
        <div>
            <h1>AboutMe</h1>
            <p>
            Hi, I'm Sorina i am romanian and i live in Germany for the past 5 years now. I decided to change my career path and make the great shift towards WebDevelopment and its engaging experience.
              My Portfolio Website is a work in progress and it brings me great joy with each little piece i build , thank you for checking it out ! 
            </p>
        </div>
    </div>
  )
}

export default AboutMe