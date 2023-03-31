import { useState } from "react";
import './HotButton.css';

export default function HotButton({text, color}) {
  const [isClicked, setIsClicked] = useState(0)
  const colorArry = ['indigo', 'darkorchid', 'coral', 'lightsalmon', 'yellow', 'white'];

  function handleClick() {
    setIsClicked(isClicked + 1);
  }


  let bgColor;
  let textColor;

    if(isClicked < 6) {
      bgColor = colorArry[0];
      textColor = 'white';
    } else if(isClicked < 9) {
      bgColor = colorArry[1];
      textColor = 'white';
    } else if(isClicked < 12) {
      bgColor = colorArry[2];
      textColor = 'white';
    } else if (isClicked < 15) {
      bgColor = colorArry[3];
    } else if (isClicked < 18) {
      bgColor = colorArry[4];
    } else {
      bgColor = colorArry[5];
    }



  return (
    <button
      className="Button"
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color: textColor}}
    >
      {text}
    </button>
  );
}
