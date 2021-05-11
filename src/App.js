import './App.css';
import { useState } from 'react';
import Result from './Result';
import CalcButton from './CalcButton';
import ResetButton from './ResetButton';

function App() {
  const [count, setCount] = useState(0);

  function mathFunction(buttonValue) {
    setCount(count + buttonValue);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="App">
      <Result sum={count} />
      <CalcButton
        onMathFunction={mathFunction}
        buttonValue={-Math.round(Math.random() * 100)}
        buttonAction="-random"
      />
      <CalcButton
        onMathFunction={mathFunction}
        buttonValue={-10}
        buttonAction="-10"
      />
      <CalcButton
        onMathFunction={mathFunction}
        buttonValue={-1}
        buttonAction="-1"
      />
      <CalcButton
        onMathFunction={mathFunction}
        buttonValue={1}
        buttonAction="+1"
      />
      <CalcButton
        onMathFunction={mathFunction}
        buttonValue={10}
        buttonAction="+10"
      />
      <CalcButton
        onMathFunction={mathFunction}
        buttonValue={Math.round(Math.random() * 100)}
        buttonAction="+random"
      />
      <section>
        <ResetButton onResetfunction={resetCount} />
      </section>
    </div>
  );
}

export default App;
