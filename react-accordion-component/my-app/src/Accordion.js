import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ data }) => {
  const [clicked, setClicked] = useState();

  console.log('value returned by useState', clicked);
  const toggle = (index) => {
    if(clicked === index) {
      console.log('when double clicked', clicked);
      setClicked();
    } else {
      setClicked(index)
      console.log('when clicked once', clicked);
    }
  }



  return (
    <div className='container'>
      {data.map((item, index) =>
      <div key={index} className='item'>
        <h1 onClick={() => toggle(index)}>{item.title}</h1>
        <div className={clicked === index ? 'content' : 'content hidden'}>{item.content}</div>
      </div>
      )}
      </div>

  );
};

export default Accordion;
