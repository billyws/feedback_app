import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      rating: 10,
      text: "This is a great product",
    },
    {
      id: 2,
      rating: 9,
      text: "This is a good product",
    },
    {
      id: 3,
      rating: 8,
      text: "This is a okay product",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedbacks = (id) => {
    setFeedbacks(feedbacks.filter((item) => item.id !== id));
  };

  const addFeedbacks = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const editFeedbacks = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedbacks = (id, update) => {
    setFeedbacks(feedbacks.map((item) => (item.id === id ? update : item)));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedbacks,
        addFeedbacks,
        feedbackEdit,
        editFeedbacks,
        updateFeedbacks,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
