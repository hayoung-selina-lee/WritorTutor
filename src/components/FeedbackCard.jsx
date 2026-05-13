import { FaArrowRight } from "react-icons/fa";

function FeedbackCard({ feedback }) {
  const badgeStyle = {
    grammar: "bg-[#E6F1FB] text-[#0C447C]",
    vocabulary: "bg-[#EAF3DE] text-[#27500A]",
    natural_expression: "bg-[#EEEDFE] text-[#3C3489]",
    style: "bg-[#FAEEDA] text-[#633806]",
  };

  return (
    <div>
      <div>
        {feedback?.corrections?.map((correction, index) => (
          <div key={index} className="border-[2px] rounded-md p-2 my-2">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-5 items-center">
                <div className="border-[2px] text-xs rounded-full px-2 p-1 bg-feedbackcard-num-bg border-feedbackcard-num-border"> {index + 1}</div>
                <div className="rounded-md p-1 px-3 bg-feedbackcard-wrong-bg text-feedbackcard-wrong-text line-through">{correction.original}</div>
                <FaArrowRight />
                <div className="rounded-md p-1 px-3 bg-feedbackcard-suggestion-bg text-feedbackcard-suggestion-text "> {correction.suggestion}</div>
              </div>
              <div className={"rounded-full p-1 text-xs " + badgeStyle[correction.type]}> {correction.type}</div>
            </div>
            <div className="my-2 border-[1px] w-full"></div>
            <div> {correction.reason}</div>
          </div>
        ))}
      </div>

      <div>{feedback?.improvedVersion}</div>
      <div>{feedback?.encouragement}</div>
    </div>
  );
}

export default FeedbackCard;
