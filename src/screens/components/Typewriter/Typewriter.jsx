import { useEffect } from "react";
import "./Typewriter.css";
//the function was inspired from the site https://www.html-code-generator.com/html/typewriter-text-scroller 
// in JS this is IIFE function, the data is used as prop and first assigned a empty array
//from there it is used in the landing component  to be assigned a couple of strings and 
// be used in the return where we ca visually put the typewriter component with the data prop on top of the animatedbackground because of the children prop used in Animated Background

function Typewriter({ data = [] }) {
  useEffect(() => {
    let CharacterPos = 0;
    let MsgBuffer = "";
    let MsgIndex = 0;
    let delay;
    let TypeSpeed = 100;
    let MsgDelay=2000;

    function StartTyping() {  //the useEffect is used here because of the getELEMntbyId (but we could use a useREF too ? and because the startTyping fucntion is a recursive funtion)

      let id = document.getElementById("typing-text"); // idd is coming from the textarea 41 which is accesed directly as a dom element via getElementById
      if (CharacterPos !== data[MsgIndex].length) {
        MsgBuffer = MsgBuffer + data[MsgIndex].charAt(CharacterPos);
        id.value = MsgBuffer + "_";
        delay = TypeSpeed;
      } else {
        delay = MsgDelay;
        MsgBuffer = "";
        CharacterPos = -1;
        if (MsgIndex !== data.length - 1) {
          MsgIndex++;
        } else {
          MsgIndex = 0;
        }
      }
      CharacterPos++;
      setTimeout(StartTyping, delay);
    }

    StartTyping();
  });

  return <textarea id="typing-text" readOnly></textarea>;
}

export default Typewriter;
