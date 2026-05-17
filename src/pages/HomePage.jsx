import FeedbackSection from "../components/FeedbackSection";
import TopicCard from "../components/TopicCard";
import WritingEditor from "../components/WritingEditor";
import useOpenAI from "../hooks/useOpenAI";
import { useEffect } from "react";

function HomePage() {
  const { topic, feedback, isLoading, error, generateTopic, getFeedback } = useOpenAI();

  useEffect(() => {
    generateTopic();
  }, []);

  return (
    <div className="bg-background p-4 max-w-4xl mx-auto ">
      <TopicCard topic={topic} onNewTopic={generateTopic} />
      <WritingEditor onGetFeedback={getFeedback} />
      <FeedbackSection feedbacks={feedback} />
    </div>
  );
}

export default HomePage;
