export const GameImage = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        style={{
          maxWidth: "300px",
        }}
      />
    </div>
  );
};
