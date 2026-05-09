import { IoMdRefresh } from "react-icons/io";

function TopicCard({ topic }) {
  return (
    <div className="">
      <div className="rounded-lg bg-primary-light py-5">
        <div className="flex flex-row justify-between items-center px-2 ">
          <div className="flex flex-col">
            <div className="">Today's Topic?</div>
            <div className="text-primary font-medium text-2xl">{topic}</div>
          </div>
          <button className="flex items-center gap-2 p-1 text-white bg-primary shadow-md rounded-lg hover:bg-primary-dark">
            <IoMdRefresh />
            button
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
