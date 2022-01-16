import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const { addFeedbacks, feedbackEdit, updateFeedbacks } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  // Function to handle the change of the input field, and set the state of the button, and the message
  const handleTextChange = (e) => {
    // Checking to see if the input is empty
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Please enter at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  // Form submission with defaults preventDefault
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      setMessage("Thank you for your feedback!");
      const newFeedback = {
        rating,
        text,
      };

      if (feedbackEdit.edit === true) {
        updateFeedbacks(feedbackEdit.item.id, newFeedback);
        setMessage("Update is succcessful!");
      } else {
        addFeedbacks(newFeedback);
      }
    }

    setBtnDisabled(true);
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>How would you rate NSO ICT Services </h3>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your honest opinion here..."
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        <p>{message}</p>
      </form>
    </Card>
  );
}

export default FeedbackForm;
