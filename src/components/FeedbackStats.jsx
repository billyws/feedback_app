import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);

  // Calculate the average rating of all feedbacks
  let average =
    feedbacks.reduce((total, feedback) => total + feedback.rating, 0) /
    feedbacks.length;

  // Round the average to the nearest whole number
  average = parseFloat(average.toFixed(1));
  return (
    <div className="feedback-stats">
      {
        // Check to see if the Activities array is empty
        feedbacks.length <= 1 ? (
          <h4>{feedbacks.length} Activity</h4>
        ) : (
          <h4>{feedbacks.length} Activities</h4>
        )
      }

      <h4>Average Score: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
