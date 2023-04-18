import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  const handleNumber = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div>
      <div>{items[currentIndex]}</div>
      <div>
        <CustomButton
          text="Prev"
          handleClick={handlePrev}
          color="white"
        />
        <Indicators count={items.length} onSelect={handleNumber} isActive={currentIndex} />
        <CustomButton
          text="Next"
          handleClick={handleNext}
          color="white"
        />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, handleClick, color }) {
  return <button onClick={handleClick} style={{ backgroundColor: color}}>{text}</button>;
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, onSelect, isActive }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<CustomButton key={i} text={i} handleClick={() => onSelect(i)} color={isActive === i ? "skyblue": "white"} />);
  }
  return (
    <div>{ buttons }</div>
  );
}
