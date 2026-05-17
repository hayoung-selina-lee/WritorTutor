import { IoMdRefresh } from "react-icons/io";

function TopicCard({ topic, onNewTopic, isTopicLoading }) {
  return (
    <div className="rounded-lg bg-primary-light py-3 ">
      <div className="flex flex-row justify-between items-center px-2 min-h-[100px] ">
        <div className="flex flex-col flex-1 min-w-0 justify-center">
          <div className="text-m font-medium pb-1">Today's Topic?</div>
          {isTopicLoading ? (
            <div className="w-6 h-6 border-4 border-primary-light border-t-primary rounded-full animate-spin" />
          ) : (
            <div className="text-primary font-semibold text-xl">{topic?.topic}</div>
          )}
        </div>
        <button
          className=" px-2 flex items-center gap-1 p-1 text-white bg-primary shadow-md rounded-lg shadow-md hover:bg-primary-dark flex-shrink-0"
          onClick={onNewTopic}
          disabled={isTopicLoading}
        >
          <IoMdRefresh />
          New Topic
        </button>
      </div>
    </div>
  );
}

export default TopicCard;
