import { useState } from "react";

export const Options = () => {
  //   const [good, setGood] = useState(0);

  //   const [neutral, setNeutral] = useState(0);

  //   const [bad, setBad] = useState(0);

  //   const handleClickGood = () => {
  //     setGood(good + 1);
  //   };

  //   const handleClickNeutral = () => {
  //     setNeutral(neutral + 1);
  //   };

  //   const handleClickBad = () => {
  //     setBad(bad + 1);
  //   };

  return (
    <div>
      <ul>
        <li>
          <button onClick={handleClickGood}>Good {good}</button>
        </li>
        <li>
          <button onClick={handleClickNeutral}>Neutral {neutral}</button>
        </li>
        <li>
          <button onClick={handleClickBad}>Bad {bad}</button>
        </li>
      </ul>
    </div>
  );
};
