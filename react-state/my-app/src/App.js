import './App.css';
import ToggleButton from './ToggleButton.js';

function App() {
  return (
    <div className="App">
      <ToggleButton text='Button 1' color= 'red'/>
      <ToggleButton text='Button 2' color='blue' />
      <ToggleButton text='Button 3' color='yellow' />
    </div>
  );
}

export default App;
