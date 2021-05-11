export default function CalcButton({ buttonAction, variable, onMathFunction }) {
  return (
    <button onClick={() => onMathFunction(variable)}>{buttonAction}</button>
  );
}
