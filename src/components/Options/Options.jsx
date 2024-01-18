export const Options = () => {
  const handleClick = () => {
    console.log(Date.now());
  };

  return (
    <div>
      Options
      <button onClick={handleClick}>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  );
};
