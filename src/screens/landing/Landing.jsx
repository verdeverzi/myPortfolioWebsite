import "./Landing.css";
import React from "react";
// import AnimatedBackground from "../components/AnimatedBackground/AnimatedBackground"
import { Typewriter, AnimatedBackground } from "../components/animatedComp";

let msgArray = [
  "Hello!",
  "I am a FrontEnd Web Developer",
  "based in Timisoara Romania",
  " ",
];

const Landing = () => {
  return (
    //this component is used to bring the animatedbackground and the typewriter components together
    // through thr children props and display the typewriter on top the animatedbackground
    
    <AnimatedBackground>
      <div className="landing-type">
        {/* <div></div> */}

        <Typewriter className='typewriter'data={msgArray} />
      </div>
    </AnimatedBackground>
  );
};

export default Landing;
