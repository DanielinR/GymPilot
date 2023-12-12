import PauseIcon from "@/components/svg/PauseIcon";
import PlayIcon from "@/components/svg/PlayIcon";
import StopIcon from "@/components/svg/StopIcon";
import { useState, useEffect } from "react";


export default function CreateSetTopper({defaultTime2Wait = 95}:{defaultTime2Wait:number}) {
  const [onPlay, setOnPlay] = useState(false);
  const [timeLeft, setTimeLeft] = useState(defaultTime2Wait);

  function getMinutes() {
    return Math.trunc(timeLeft / 60)
  }
  function getSeconds() {
    return timeLeft % 60
  }
  const handlePlayPause = () => {
    setOnPlay(!onPlay)
  }
  const handleStop = () => {
    setOnPlay(false)
    setTimeLeft(defaultTime2Wait)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!onPlay || timeLeft == 0) { return }
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [onPlay])

  return (
    <div className="bg-color-info-back h-20 w-48 rounded-md -translate-y-2 pt-4 flex flex-col items-center justify-center font-bold">
      <span className="text-4xl">{getMinutes()}:{getSeconds()}</span>
      <div className="flex items-center justify-center bg-color-primary-strong w-full rounded-b-md">
        <button onClick={handlePlayPause}>
          {!onPlay && <PlayIcon className="text-color-secondary h-8 w-8" />}
          {onPlay && <PauseIcon className="text-color-secondary h-8 w-8" />}
        </button>
        <button onClick={handleStop}>
          <StopIcon className="text-color-secondary h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
