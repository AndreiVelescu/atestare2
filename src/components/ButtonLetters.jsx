export const ButtonLetters = ({ letters, onSelect, used, disabled }) => {
  return (
    <div style={{ margin: "20px" }}>
      {letters.map((letter, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(letter, idx)}
          disabled={used.includes(idx) || disabled}
          style={{
            margin: "5px",
            padding: "10px",
            fontSize: "18px",
            cursor: used.includes(idx) || disabled ? "not-allowed" : "pointer",
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
