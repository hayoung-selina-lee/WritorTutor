import { FaPen } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

function WritingEditor({ writing, setWriting, onGetFeedback, isFeedbackLoading }) {
  const countWords = writing.trim() === "" ? 0 : writing.trim().split(/\s+/).length;

  // check button condition setting
  const checkButton = {
    enabled: "bg-primary hover:bg-primary-dark",
    disabled: "bg-disabled cursor-not-allowed",
  };

  const buttonClass = countWords === 0 || isFeedbackLoading ? checkButton.disabled : checkButton.enabled;

  return (
    <div>
      <div className="flex items-center gap-2 pt-3 py-2">
        <FaPen />
        Your Writing
      </div>

      <textarea
        className="p-2 border border-2 border-primary-light rounded-lg w-full min-h-64 focus:border-primary resize-none"
        onChange={(e) => {
          setWriting(e.target.value);
        }}
        value={writing}
        placeholder="Start writing here..."
      />

      <div className="flex flex-row justify-between items-center">
        <div>{countWords} words</div>
        <button
          className={"min-w-[165px] rounded-lg flex items-center justify-center gap-1 text-white px-2 p-1 " + buttonClass}
          onClick={() => onGetFeedback(writing)}
          disabled={countWords === 0 || isFeedbackLoading}
        >
          {isFeedbackLoading ? (
            <>
              <div className="w-6 h-6 border-4 border-white/40 border-t-white rounded-full animate-spin " />
              Checking...
            </>
          ) : (
            <>
              <FaCheck />
              Check My Writing
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default WritingEditor;
