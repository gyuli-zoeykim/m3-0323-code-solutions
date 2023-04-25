import { useState, useEffect } from "react";
import { RxCaretLeft, RxCaretRight, RxDotFilled, RxDot } from "react-icons/rx";
import './Carousel.css';

export default function Carousel({ pokedex }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + pokedex.length) % pokedex.length);
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % pokedex.length);
  }

  const handleIndicator = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const timeOut = setTimeout(handleNext, 3000);
    return () => clearTimeout(timeOut);
  });


  return (
    <div className="container">
      <div className="arrow">
        <CustomButton icon={<RxCaretLeft size={80} />} handleClick={handlePrev} />
        <img src={pokedex[currentIndex].url} alt={pokedex[currentIndex].name} />
        <CustomButton icon={<RxCaretRight size={80} />} handleClick={handleNext} />
      </div>
      <Indicators count={pokedex.length} onSelect={handleIndicator} isActive={currentIndex} />
    </div>
  );
}

function CustomButton({ icon, handleClick}) {
  return <div onClick={handleClick}>{icon}</div>;
}

function Indicators({ count, onSelect, isActive }) {
  const indicator = [];
  for (let i = 0; i < count; i++) {
    indicator.push(<CustomButton key={i} icon={isActive === i ? <RxDotFilled size={50} /> : <RxDot size={50} />} handleClick={() => onSelect(i)} />);
  }
  return (
    <div className="dot-indicator">{indicator}</div>
  );
}
