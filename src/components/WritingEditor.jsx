import { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

function WritingEditor({ writing, setWriting, onGetFeedback, isFeedbackLoading }) {
  const [countWords, setCountWords] = useState(0);

  useEffect(() => {
    if (writing === "") {
      setCountWords(0);
    }
  }, [writing]);

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
          const trimmedInput = e.target.value.trim();
          trimmedInput === "" ? setCountWords(0) : setCountWords(trimmedInput.split(/\s+/).length);
        }}
        value={writing}
        placeholder="Start writing here..."
      />

      <div className="flex flex-row justify-between items-center">
        <div>{countWords} words</div>
        <button className={"min-w-[165px] rounded-lg " + buttonClass} onClick={() => onGetFeedback(writing)} disabled={countWords === 0 || isFeedbackLoading}>
          {isFeedbackLoading ? (
            <div className="flex items-center gap-2 text-white shadow-md px-2 p-1">
              <div className="w-6 h-6 border-4 border-white/40 border-t-white rounded-full animate-spin " />
              Checking...
            </div>
          ) : (
            <div className="flex items-center gap-1 text-white shadow-md px-2 p-1 ">
              <FaCheck />
              Check My Writing
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default WritingEditor;
