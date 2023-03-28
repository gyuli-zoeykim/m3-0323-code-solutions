import { useState } from 'react';

export default function ToggleButton({text, color}) {
  const [isClicked, setIsClicked] = useState(false)
  console.log('value returned by useState:', isClicked);

  function handleClick() {
    console.log('value BEFORE calling setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('value AFTER calling setter:', isClicked);
  }
  return (
    <button
    onClick={handleClick}
    style={{backgroundColor: ((isClicked ? color : 'white'))}}
    >
      {text}
    </button>
  );
}
