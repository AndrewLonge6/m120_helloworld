import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


export default function App() {
  const [counter, setCounter,] = useState(0);

  function buttonHandler(){
    console.log("u clicked it");
  }
  function counterPlus(){
    setCounter(counter+1)
    console.log(counter);
  }
  let blubber = buttonHandler
  blubber()
  
  return (//JSX
    <div className="App">
      <header className="App-header">
        wagwan cuz
        <button onClick={ counterPlus }>click dis</button>
      <p>{counter}</p>
      </header>
    </div>
  );
}




