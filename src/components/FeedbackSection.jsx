import FeedbackCard from "./FeedbackCard";

function FeedbackSection({ feedbacks }) {
  console.log(feedbacks);

  return (
    <div>
      <FeedbackCard feedback={feedbacks} />
    </div>
  );
}

export default FeedbackSection;
