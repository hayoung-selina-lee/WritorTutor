import TopicCard from "../components/TopicCard";
import WritingEditor from "../components/WritingEditor";

function HomePage() {
  return (
    <div className="bg-background p-4 max-w-2xl mx-auto ">
      <TopicCard topic="This is Random Topic!" />
      <WritingEditor />
    </div>
  );
}

export default HomePage;
