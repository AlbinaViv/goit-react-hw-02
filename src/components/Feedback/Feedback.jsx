export const Feedback = ({ good, bad, neutral, total, positive }) => {
  if (total !== 0) {
    return (
      <ul>
        <li>
          <span>Good: {good}</span>
        </li>
        <li>
          <span>Neutral: {neutral}</span>
        </li>
        <li>
          <span>Bad: {bad}</span>
        </li>
        <li>
          <span>Total: {total}</span>
        </li>
        <li>
          <span>Positive: {positive}%</span>
        </li>
      </ul>
    );
  } else {
    return <p>No feedback yet</p>;
  }
};
