import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedbacks, editFeedbacks } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedbacks(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedbacks(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

//Wix:
//email: eikilik43@gmail.com
//Pw: Vunakukup@2!

//Namecheap:
//Username: ikilik
//Pw: Vunakokor@4!

//Pw for the second acc is
//Password: EMTV@2021!
//Email: two4mediapng@gmail.com
