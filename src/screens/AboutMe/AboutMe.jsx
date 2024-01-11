import React from 'react'
import "./AboutMe.css"
import mypic from "./mypic.jpg"

const AboutMe = () => {
  return (
    <div id="aboutme" className="aboutme-container">
        {/* <img src={mypic}  alt="profile"/> */}
        <div>
            <h1>About Me</h1>
            <p>
            HI, my name is Sorina. 
            <br />
           I've decided to shift my career path towards web development, and I'm already finding it to be an engaging and fulfilling experience.

I'm currently working on my portfolio website, which is still a work in progress.
<br />
 However, with each little piece I build, I find great joy and satisfaction. Thank you for taking the time to check it out!
</p>
    </div>
    </div>
  )
}

export default AboutMe