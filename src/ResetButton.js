import './ResetButton.css';

export default function ResetButton({ onResetfunction }) {
  return (
    <button class="reset_button" onClick={() => onResetfunction()}>
      reset
    </button>
  );
}
