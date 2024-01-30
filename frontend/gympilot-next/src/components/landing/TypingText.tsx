import { useEffect, useState } from "react";

export default function TypingText({
  words,
  classname,
  delay = 85,
  finalWait = 500,
}: {
  words: string[];
  classname?: string;
  delay?:number;
  finalWait?:number;
}) {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (document == null || !document.getElementById("typewriter")) {
        return;
      }
      const currentWord = words[i];
      if (deleting) {
        setTextContent(currentWord.substring(0, j - 1));
        setJ(j - 1);
        if (j == 0) {
          setDeleting(false);
          const newI = i + 1
          if (newI == words.length) {
            setI(0);
          }else{
            setI(i + 1);
          }
        }
      } else {
        setTextContent(currentWord.substring(0, j + 1));
        const newj = j+1
        if (newj >= currentWord.length + finalWait/delay) {
          setDeleting(true);
        }else{
          setJ(newj);
        }
      }
    }, delay);
    return () => clearInterval(interval);
  }, [words, i, j, deleting, delay, finalWait]);
  return (
    <h3 id="typewriter" className={classname}>
      {textContent}
    </h3>
  );
}
