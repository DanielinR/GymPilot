import PauseIcon from "@/components/svg/PauseIcon";
import PlayIcon from "@/components/svg/PlayIcon";
import StopIcon from "@/components/svg/StopIcon";
import { useState, useEffect } from "react";


export default function Timer({defaultTime2Wait = 95}:{defaultTime2Wait?:number}) {
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
    <div className="bg-neutral-500 text-white bg-opacity-90 px-8 py-3 gap-1 shadow-xl rounded-t-md flex flex-col items-center justify-center font-bold">
      <span className="text-4xl">{getMinutes()}:{getSeconds()}</span>
      <div className="flex gap-2 items-center justify-center bg-color-primary-strong w-full rounded-b-md">
        <button className="bg-brand-500 rounded-full p-1" onClick={handlePlayPause}>
          {!onPlay && <PlayIcon className=" h-6 w-6" />}
          {onPlay && <PauseIcon className=" h-6 w-6" />}
        </button>
        <button className="bg-brand-500 rounded-full p-1" onClick={handleStop}>
          <StopIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
