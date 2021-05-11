export default function CalcButton({
  buttonAction,
  buttonValue,
  onMathFunction,
}) {
  return (
    <button onClick={() => onMathFunction(buttonValue)}>{buttonAction}</button>
  );
}
