import { IoMdRefresh } from "react-icons/io";

function TopicCard({ topic, onNewTopic }) {
  return (
    <div className="">
      <div className="rounded-lg bg-primary-light py-5">
        <div className="flex flex-row justify-between items-center px-5 ">
          <div className="flex flex-col">
            <div className="text-sm font-medium pb-1">Today's Topic?</div>
            <div className="text-primary font-semibold text-2xl">{topic?.topic}</div>
          </div>
          <button className="px-2 flex items-center gap-1 p-1 text-white bg-primary shadow-md rounded-lg shadow-md hover:bg-primary-dark" onClick={onNewTopic}>
            <IoMdRefresh />
            New Topic
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
