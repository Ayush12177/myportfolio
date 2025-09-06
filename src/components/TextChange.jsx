import React from "react";
import { useState, useEffect } from "react";
const TextChange = () => {
  const texts = ["Hi, I'm Ayush Gupta", "A MERN Stack Developer", "A Passionate Programmer"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));
      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }
      if (endValue === 0) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, 40);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return <div className="transition ease duration-300">{currenText}</div>;
};

export default TextChange;