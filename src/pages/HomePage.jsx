import TopicCard from "../components/TopicCard";
import WritingEditor from "../components/WritingEditor";

function HomePage() {
  return (
    <div className="p-4 ">
      <TopicCard topic="This is Random Topic!" />
      <WritingEditor />
    </div>
  );
}

export default HomePage;
