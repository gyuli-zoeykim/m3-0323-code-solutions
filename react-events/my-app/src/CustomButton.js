export default function CustomButton({ text, color, onCustomClick }) {

  return (
    <button onClick={()=>onCustomClick(text)} style={{color}}>{text}</button>
  );
}
