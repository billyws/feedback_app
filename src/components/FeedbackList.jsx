import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { FeedbackContext } from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList() {
  const { feedbacks } = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <p>There's no feedback</p>;
  }

  return (
    <AnimatePresence>
      <div className="feedback-list">
        {feedbacks.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}

export default FeedbackList;
