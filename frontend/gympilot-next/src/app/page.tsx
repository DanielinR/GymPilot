"use client";

import TypingText from "@/components/landing/TypingText";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const words = [
    "Finally a simple app to register your workouts.",
    "Compete with friends by comparing training sessions.",
    "Be better everyday.",
  ];

  return (
    <div className="flex flex-col w-full min-fullheight text-white">
      <div className="z-50 h-16 fixed top-0 bg-neutral-900 bg-opacity-90 w-full flex items-center px-5">
        <Image alt="logo image" src={"/icon.png"} width={35} height={45} />
        <div className="w-full h-full flex gap-2 md:gap-5 items-center justify-end font-bold md:mr-6">
          <Link
            href={"/login"}
            className="px-3 bg-brand-500 hover:bg-brand-700 py-2 rounded-lg"
          >
            LOGIN
          </Link>
        </div>
      </div>
      <div className="h-16 bg-neutral-700"></div>
      <div className="h-[70vh] bg-neutral-700 flex justify-center relative text-center p-4 md:pt-10">
        <div className="h-40 flex flex-col items-center p-10 gap-5">
          <h3 className="font-bold text-2xl md:text-4xl">
            Effortless workout tracking: Web & Mobile.
          </h3>
          <TypingText
            words={words}
            classname="font-mono md:text-2xl"
          ></TypingText>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex gap-1 items-center">
            <h1 className="shadowText font-extrabold text-5xl lg:text-7xl text-white">
              GYM{" "}
            </h1>
            <h1 className="shadowText font-extrabold text-5xl lg:text-7xl text-brand-500">
              PILOT
            </h1>
          </div>
          <Link
            href={"/login"}
            className="flex items-center justify-center text-center text-4xl lg:text-5xl bg-brand-500 hover:bg-brand-700 px-6 py-3 rounded-xl font-extrabold shadow-brand shadow-xl shadowText "
          >
            START
          </Link>
        </div>
      </div>
      <div className="bg-[url('/background2.png')] w-full h-[calc(100vw)] lg:h-[60rem] bg-right-top bg-cover flex flex-col items-center p-7 relative inner-bottom-shadow">
        <Image alt="playStore badge" src={"/landing/google_play.png"} height={150} width={400} className="w-80 lg:w-96 h-auto absolute top-0 -translate-y-1/2"></Image>
        <Image
          alt="screenshot"
          src={"/landing/screenshot.png"}
          width={220}
          height={500}
          className="z-30 absolute top-1/2 right-1/2 translate-x-1/2 rounded-xl shadow-2xl w-[30%] lg:w-52 h-auto"
        ></Image>
        <Image
          alt="screenshot"
          src={"/landing/screenshot.png"}
          width={220}
          height={500}
          className="z-10 absolute top-1/2 right-1/2 -translate-x-6 rounded-xl shadow-xl w-[25%] lg:w-44 h-auto -rotate-12 brightness-90 translate-y-7"
        ></Image>
        <Image
          alt="screenshot"
          src={"/landing/screenshot.png"}
          width={220}
          height={500}
          className="z-10 absolute top-1/2 right-1/2 translate-x-[calc(100%+1.5rem)] rounded-xl shadow-2xl w-[25%] lg:w-44 rotate-12 h-auto brightness-90 translate-y-7"
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-end bg-neutral-500 w-full h-[17rem] md:h-[24rem] lg:h-[17rem] text-neutral-50 font-light p-8">
        <div className="bg-neutral-700 p-8 rounded-md gap-7 flex">
          <div className="flex flex-col justify-end">
            <h4 className="font-normal pb-2">Contact info:</h4>
            <h4>Daniel Romero Hernandez</h4>
            <h4>@da.romero.hernandez@gmail.com</h4>
          </div>
          <Image alt="Linkedin Logo" src={"/landing/linkedin.png"} width={45} height={45} className="h-8 w-auto"/>
        </div>
      </div>
    </div>
  );
}
