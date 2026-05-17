import FeedbackCard from "../components/FeedbackCard";
import TopicCard from "../components/TopicCard";
import WritingEditor from "../components/WritingEditor";
import useOpenAI from "../hooks/useOpenAI";
import { useEffect } from "react";
import { useState } from "react";

function HomePage() {
  const { topic, feedback, isFeedbackLoading, isTopicLoading, error, generateTopic, getFeedback, resetFeedback } = useOpenAI();
  const [writing, setWriting] = useState("");

  useEffect(() => {
    generateTopic();
  }, []);

  const handleNewTopic = () => {
    generateTopic();
    setWriting("");
    resetFeedback();
  };

  return (
    <div className="bg-background p-4 max-w-4xl mx-auto ">
      <TopicCard topic={topic} onNewTopic={handleNewTopic} isTopicLoading={isTopicLoading} />
      <WritingEditor writing={writing} setWriting={setWriting} onGetFeedback={getFeedback} isFeedbackLoading={isFeedbackLoading} />
      {feedback && <FeedbackCard feedback={feedback} />}
    </div>
  );
}

export default HomePage;
