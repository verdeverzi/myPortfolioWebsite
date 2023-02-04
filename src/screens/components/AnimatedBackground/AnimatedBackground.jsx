import React from "react";
import "./AnimatedBackground.css";

import { ReactComponent as Bookmark } from "./svg/bookmark.svg";
import { ReactComponent as Calendar } from "./svg/calendar.svg";
import { ReactComponent as Cancel } from "./svg/cancel.svg";
import { ReactComponent as Chat1 } from "./svg/chat1.svg";
import { ReactComponent as Checkmark1 } from "./svg/checkmark1.svg";
import { ReactComponent as Cloud } from "./svg/cloud.svg";
import { ReactComponent as Coffee } from "./svg/coffee.svg";
import { ReactComponent as Download1 } from "./svg/download1.svg";
import { ReactComponent as File2 } from "./svg/file2.svg";
import { ReactComponent as Globe1 } from "./svg/globe1.svg";
import { ReactComponent as Heart } from "./svg/heart.svg";
import { ReactComponent as Info1 } from "./svg/info1.svg";
import { ReactComponent as Keyboard1 } from "./svg/keyboard1.svg";
import { ReactComponent as Lamp1 } from "./svg/lamp1.svg";
import { ReactComponent as Lamp4 } from "./svg/lamp4.svg";
import { ReactComponent as Link } from "./svg/link.svg";
import { ReactComponent as List } from "./svg/list.svg";
import { ReactComponent as Location } from "./svg/location.svg";
import { ReactComponent as Moon } from "./svg/moon.svg";
import { ReactComponent as Mouse } from "./svg/mouse.svg";
import { ReactComponent as Pacman } from "./svg/pacman.svg";
import { ReactComponent as Pen1 } from "./svg/pen1.svg";
import { ReactComponent as Phone } from "./svg/phone.svg";
import { ReactComponent as Picture } from "./svg/picture.svg";
import { ReactComponent as Pig } from "./svg/pig.svg";
import { ReactComponent as Rotate1 } from "./svg/rotate1.svg";
import { ReactComponent as Smiley } from "./svg/smiley.svg";
import { ReactComponent as Spaceinvaders } from "./svg/spaceinvaders.svg";
import { ReactComponent as Switch1 } from "./svg/switch1.svg";
import { ReactComponent as Time1 } from "./svg/time1.svg";
import { ReactComponent as Transformers } from "./svg/transformers.svg";
import { ReactComponent as Warning } from "./svg/warning.svg";

//we create an array with 6 items [0,1,2,3,4,5]
//the children props is used in the Landing component that  take all the info that is contained inside the
//animatedBackground component and bring it back here and display it on line 80
const AnimatedBackground = ({ children }) => {
  let arr = [];
  let qty = 6;
  for (let i = 0; i < qty; i++) {
    arr.push(i);
  }
// we take the array and for each item we add the div with the svg's
  const layers = arr.map((i) => {
    return (
      <div key={i} className="animated-row">
        <div>
          <Chat1 />
          <Keyboard1 />       
          <Link />
          <Heart />
          <Bookmark />
          <Download1 />
          <Coffee />
          <Checkmark1 />
          <Mouse />
          <Cloud />      
          <File2 />
          <Globe1 />
          <Lamp4 />
          <Lamp1 />
          <Calendar />
          <Cancel />
          <Info1 />

        </div>
      </div>
    );
  });

  return (
    <section id="home" className="animated-section">
      {layers}
      {children}
    </section>
  );
};

export default AnimatedBackground;
