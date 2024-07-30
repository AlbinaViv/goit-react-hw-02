import css from "./Options.module.css";

export const Options = ({
  handelGood,
  handelBad,
  handelNeutral,
  total,
  handleReset,
}) => {
  return (
    <ul className={css.btList}>
      <li>
        <button onClick={handelGood}>Good</button>
      </li>
      <li>
        <button onClick={handelNeutral}>Neutral</button>
      </li>
      <li>
        <button onClick={handelBad}>Bad</button>
      </li>
      <li>{total !== 0 && <button onClick={handleReset}>Reset</button>}</li>
    </ul>
  );
};
