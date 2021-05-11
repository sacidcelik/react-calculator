import './Result.css';

export default function Result({ sum }) {
  return (
    <p className="result" style={{ color: `hsl(${sum}, 100%, 50%)` }}>
      {sum}
    </p>
  );
}
