function ColorButton({ color, onClick }) {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      Change to {color}
    </button>
  );
}

export default ColorButton;
