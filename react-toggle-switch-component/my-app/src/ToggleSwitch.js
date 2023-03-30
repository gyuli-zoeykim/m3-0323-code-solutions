import { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch({text, color, position}) {
  const [isSwitched, setIsSwitched] = useState(false);

  function handleSwitch() {
    setIsSwitched(!isSwitched);
  }

  return (
    <div className='Container'>
      <div className='SwitchContainer'>
        <button
        className={isSwitched ? color : color + ' Color'}
        onClick={handleSwitch}
        >
        </button>
        <span className={isSwitched ? position : position + ' Position'}></span>
      </div>
      <span className='Label'>{isSwitched ? text : 'ON'}</span>
    </div>
  );
}
