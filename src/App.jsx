import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setoutputValue] = useState("");
  // const [filteredString , setFilteredString] = useState(inputValue.split(/([+-])/));
   const filteredString = inputValue.split(/([+*/-])/);
  const digits = inputValue.split(/(\^)/);
  const inverse = inputValue.split(/(?<=\d)(?=\D)/);
  const seperate = /(\D+)(\d+)/;
  const value = inputValue.match(seperate);

  const calculate = () =>{
    if (filteredString[1] == '+') {
      const answer = Number(filteredString[0]) + Number(filteredString[2]);
      setoutputValue(answer.toString())
      setInputValue(answer.toString());
    }
    else if(filteredString[1] == '-'){
      const answer = Number(filteredString[0]) - Number(filteredString[2]);
      setoutputValue(answer.toString())
      setInputValue(answer.toString());
    }
    else if(filteredString[1] == '*'){
      const answer = parseInt(filteredString[0]) * parseInt(filteredString[2]);
      console.log(parseInt(filteredString[0]) * parseInt(filteredString[2]));
      setoutputValue(answer.toString())
      setInputValue(answer.toString());
    }
    else if(filteredString[1] == '/'){
      const answer = Number(filteredString[0]) / Number(filteredString[2]);
      setoutputValue(answer.toString())
      setInputValue(answer.toString());
    }
    else if(digits[1] == '^'){
      const answer = Number(digits[0]) * Number(digits[0]);
      setoutputValue(answer.toString());
      setInputValue(answer.toString());
    }
    if(inverse[1] == "^-1"){
      const answer = 1/Number(inverse[0]);
      setoutputValue(answer.toString());
      setInputValue(answer.toString());
    }
    else if(inverse[1] == '%'){
      const answer = Number(inverse[0]) / 100;
      setoutputValue(answer.toString());
      setInputValue(answer.toString());
    }
    else if(value[1] == '√'){
      const ans = Math.sqrt(Number(value[2]));
      setoutputValue(ans.toString()); 
      setInputValue(ans.toString());
    }
  
}
  const removeInput = () => {
    setInputValue(inputValue.slice(0, -1));
  }
  const removeOutput = () => {
    setInputValue('');
  }
  const cancelAll = () => {
    setInputValue('');
    setoutputValue('');
  }

  return (
    <div className="App">
      <div className='App-nav'>
          <div><i class="bi bi-list"></i><span className='standard'>standard</span></div>
          <div><i class="bi bi-stopwatch"></i></div>
      </div>
      <input class="inputcalculator" value={outputValue} type="text"/>
      <input  className="outputcalculator" value={inputValue} type="text" placeholder="0"/>
      <div className='div-button-style-M'>
          <button className='button-style-M' id="clicks">MC</button>
          <button className='button-style-M' id="clicks">MR</button>
          <button className='button-style-M' id="clicks">M+</button>
          <button className='button-style-M' id="clicks">M-</button>
          <button className='button-style-M' id="clicks">Ms</button>
          <button className='button-style-M' id="clicks">M</button>
      </div>
      <div className='div-button-style'>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + '%')}>%</button>
          <button className='button-style' id="clicks" onClick={removeOutput}>CE</button>
          <button className='button-style' id="clicks" onClick={cancelAll}>C</button>
          <button className='button-style' id="clicks" onClick={removeInput}><i class="bi bi-x-square"></i></button>
      </div>
      <div className='div-button-style'>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + "^-1")}>1/x</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + "^2")}>x²</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + "√")}>√x</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + "/")}>/</button>
      </div>
      <div className='div-button-style'>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + 7)}>7</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + 8)}>8</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + 9)}>9</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + "*")}>X</button>
      </div>
      <div className='div-button-style'>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + 4)}>4</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + 7)}>5</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + 6)}>6</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + "-")}>-</button>
      </div>
      <div className='div-button-style'>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + 1)}>1</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + 2)}>2</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + 3)}>3</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + "+")}>+</button>
      </div>
      <div className='div-button-style'>
          <button className='button-style' id="clicks">+/-</button>
          <button className='button-style' id="clicks">0</button>
          <button className='button-style' id="clicks" onClick={() => setInputValue(inputValue + ".")}>.</button>
          <button className='button-style-equal' id="clicks" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
