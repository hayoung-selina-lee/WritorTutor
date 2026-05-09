import { useState } from "react";
import { FaPen } from "react-icons/fa6";

function WritingEditor() {
  const [countWords, setCountWords] = useState(0);

  return (
    <div>
      <div className="flex items-center gap-2 px-2 py-2">
        <FaPen />
        Your Writing
      </div>

      <textarea
        className="p-2 border border-2 border-primary-light rounded-lg w-full h-96 focus:border-primary"
        onChange={(e) => {
          const trimmedInput = e.target.value.trim();
          trimmedInput === "" ? setCountWords(0) : setCountWords(trimmedInput.split(/\s+/).length);
        }}
      />
      <div>{countWords} words</div>
    </div>
  );
}

export default WritingEditor;
