import { useState } from "react";
import { FaPen } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

function WritingEditor({ feedback, onGetFeedback }) {
  const [countWords, setCountWords] = useState(0);
  const [writing, setWriting] = useState("");

  // check button condition setting
  const checkButton = {
    enabled: "bg-primary hover:bg-primary-dark",
    disabled: "bg-disabled cursor-not-allowed",
  };

  const buttonClass = countWords === 0 ? checkButton.disabled : checkButton.enabled;

  return (
    <div>
      <div className="flex items-center gap-2 pt-8 py-2">
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
        placeholder="Start writing here..."
      />

      <div className="flex flex-row justify-between items-center ">
        <div>{countWords} words</div>
        <button
          className={"px-2 flex items-center gap-1 p-1 text-white shadow-md rounded-lg shadow-md " + buttonClass}
          onClick={() => onGetFeedback(writing)}
          disabled={countWords === 0}
        >
          <FaCheck />
          Check My Writing
        </button>
      </div>
    </div>
  );
}

export default WritingEditor;
