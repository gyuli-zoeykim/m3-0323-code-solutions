import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton text="I" color={{background: 'red', text: 'black'}} />
          <CustomButton text="know" color={{ background: 'green', text: 'black' }} />
          <CustomButton text="React!" color={{ background: 'skyblue', text: 'black', borderRadius: 5, borderColor: 'blue' }} />
        </div>
      </header>
    </div>
  );
}

export default App;
