import { useState } from 'react';
import './Accordion.css';

const Accordion = ({ data }) => {
  const [clicked, setClicked] = useState();

  const toggle = (index) => {
    if(clicked === index) {
      setClicked()
    } else {
      setClicked(index)
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
