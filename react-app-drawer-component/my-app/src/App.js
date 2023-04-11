import { useState } from 'react';
import AppDrawer from './AppDrawer';

const itemArry = [
  'Home',
  'About',
  'Services',
  'Contact',
  'Location'
];

function App() {
  const [selected, setSelected] =useState("");

  function handleSelected (item) {
    setSelected(item);
  }

  return (
    <AppDrawer
      menu={{ heading: 'MENU', items: itemArry}}
      handleSelect={handleSelected}
      select={selected}/>
  );
}

export default App;
