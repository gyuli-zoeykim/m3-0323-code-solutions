import './App.css';
import CustomButton from './CustomButton.js';

function App() {
  return (
    <div className="App">
      <CustomButton onCustomClick={(text)=>alert(`Clicked ${text}`)} text='Hello' color='red' />
      <CustomButton onCustomClick={(text) => alert(`Dynamic ${text}`)} text='Learning' color='green' />
      <CustomButton onCustomClick={(text) => alert(`Each button have different value ${text}`)} text='Fuze' color='blue' />
    </div>
  );
}

export default App;
