export default function CustomButton({text, color}) {
  return (
    <button
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: color.background,
        color: color.text,
        borderRadius: color.borderRadius,
        borderColor: color.borderColor
      }}
    >
      {text}
    </button>
  );
}
