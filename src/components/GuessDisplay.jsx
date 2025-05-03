export const GuessDisplay = ({ selected }) => {
  return (
    <div style={{ fontSize: "24px", margin: "10px" }}>
      {selected.map((l, i) => (
        <span key={i} style={{ marginRight: "8px" }}>
          {l || "_"}
        </span>
      ))}
    </div>
  );
};
