import { useState } from "react";
import { GENERATE_TOPIC_SYSTEM_PROMPT, generateTopicUserPrompt, GET_FEEDBACK_SYSTEM_PROMPT, getFeedbackUserPrompt } from "../utils/promptBuilder";

function useOpenAI() {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const [topic, setTopic] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);
  const [isTopicLoading, setIsTopicLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateTopic = async () => {
    setIsTopicLoading(true);
    try {
      // request
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: GENERATE_TOPIC_SYSTEM_PROMPT,
            },
            {
              role: "user",
              content: generateTopicUserPrompt({
                englishLevel: "Intermediate",
                preferences: ["Wants practical English", "Gets bored with repetitive topics"],
              }),
            },
          ],
        }),
      });

      // response
      const responseData = await response.json();
      const content = responseData.choices[0].message.content;
      setTopic(JSON.parse(content));
    } catch (e) {
      setError(e);
    } finally {
      setIsTopicLoading(false);
    }
  };

  const getFeedback = async (userWriting) => {
    setIsFeedbackLoading(true);
    try {
      // request
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: GET_FEEDBACK_SYSTEM_PROMPT,
            },
            {
              role: "user",
              content: getFeedbackUserPrompt({ userWriting }),
            },
          ],
        }),
      });

      // get json from response
      const responseData = await response.json();

      // set
      const content = responseData.choices[0].message.content;
      setFeedback(JSON.parse(content));
    } catch (e) {
      setError(e);
    } finally {
      setIsFeedbackLoading(false);
    }
  };

  const resetFeedback = () => setFeedback(null);

  return { topic, feedback, isFeedbackLoading, isTopicLoading, error, generateTopic, getFeedback, resetFeedback };
}

export default useOpenAI;
