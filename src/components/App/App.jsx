import { useEffect, useState } from "react";
import { Discription } from "../Discription/Discription";
// import css from "./App.module.css";
import { Options } from "../Options/Options";
import { Feedback } from "../Feedback/Feedback";

export const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(reviews));
  }, [reviews]);

  const handelGood = () => {
    setReviews({ ...reviews, good: reviews.good + 1 });
  };

  const handelBad = () => {
    setReviews({ ...reviews, bad: reviews.bad + 1 });
  };

  const handelNeutral = () => {
    setReviews({ ...reviews, neutral: reviews.neutral + 1 });
  };

  const handleReset = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  return (
    <>
      <Discription />
      <Options
        handelGood={handelGood}
        handelBad={handelBad}
        handelNeutral={handelNeutral}
        total={totalFeedback}
        handleReset={handleReset}
      />
      <Feedback
        good={reviews.good}
        neutral={reviews.neutral}
        bad={reviews.bad}
        total={totalFeedback}
        positive={positiveFeedback}
      />
      {totalFeedback === 0 && <Notification />}
    </>
  );
};
