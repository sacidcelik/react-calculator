import './App.css';
import { useState } from 'react';
import Result from './Result';
import CalcButton from './CalcButton';
import ResetButton from './ResetButton';

function App() {
  const [count, setCount] = useState(0);

  function mathFunction(variable) {
    setCount(count + variable);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="App">
      <Result sum={count} />
      <CalcButton
        onMathFunction={mathFunction}
        variable={-Math.round(Math.random() * 100)}
        buttonAction="-random"
      />
      <CalcButton
        onMathFunction={mathFunction}
        variable={-10}
        buttonAction="-10"
      />
      <CalcButton
        onMathFunction={mathFunction}
        variable={-1}
        buttonAction="-1"
      />
      <CalcButton
        onMathFunction={mathFunction}
        variable={1}
        buttonAction="+1"
      />
      <CalcButton
        onMathFunction={mathFunction}
        variable={10}
        buttonAction="+10"
      />
      <CalcButton
        onMathFunction={mathFunction}
        variable={Math.round(Math.random() * 100)}
        buttonAction="+random"
      />
      <section>
        <ResetButton onResetfunction={resetCount} />
      </section>
    </div>
  );
}

export default App;
