"use client";

import TypingText from "@/components/landing/TypingText";
import PieChart from "@/components/stats/Charts/PieChart";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const words = [
    "Finally a simple app to register your workouts.",
    "Compete with friends by comparing training sessions.",
    "Be better everyday.",
  ];

  return (
    <div className="flex flex-col w-full min-fullheight text-white bg-neutral-500">
      <header className="z-50 h-16 fixed top-0 bg-neutral-900 bg-opacity-90 w-full flex items-center px-5">
        <Image alt="logo image" src={"/icon.png"} width={35} height={45} />
        <div className="w-full h-full flex gap-2 md:gap-5 items-center justify-end font-bold md:mr-6">
          <Link
            href={"/login"}
            className="px-3 bg-brand-500 hover:bg-brand-700 py-2 rounded-lg"
          >
            LOGIN
          </Link>
        </div>
      </header>
      <div className="h-[62vh] bg-neutral-700 flex flex-col justify-center gap-4 relative text-center pt-16 pb-[10vw] sm:pb-[5vw]">
        <TypingText
          words={words}
          classname="flex items-center justify-center font-mono md:text-2xl h-20 mx-10"
        ></TypingText>
        <div className="flex flex-col gap-5 items-center justify-center">
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
      <div className="bg-[url('/background2.png')] w-full h-[calc(75vw)] lg:h-[44rem] bg-right-top bg-cover flex flex-col items-center p-7 relative inner-bottom-shadow bg-position-7vh mb-14">
        <Image
          alt="playStore badge"
          src={"/landing/google_play.png"}
          height={144}
          width={380}
          className="w-72 lg:w-96 h-auto absolute top-0 -translate-y-1/2"
        ></Image>
        <Image
          alt="screenshot"
          src={"/landing/home.png"}
          width={220}
          height={500}
          className="z-30 absolute top-[58%] lg:top-2/3 right-1/2 translate-x-1/2 rounded-xl shadow-2xl w-[30%] lg:w-64 h-auto"
        ></Image>
        <Image
          alt="screenshot"
          src={"/landing/stats.png"}
          width={220}
          height={500}
          className="z-10 absolute top-[58%] lg:top-2/3 right-1/2 -translate-x-6 rounded-xl shadow-xl w-[25%] lg:w-56 h-auto -rotate-12 brightness-90 translate-y-7"
        ></Image>
        <Image
          alt="screenshot"
          src={"/landing/exercises.png"}
          width={220}
          height={500}
          className="z-10 absolute top-[58%] lg:top-2/3 right-1/2 translate-x-[calc(100%+1.5rem)] rounded-xl shadow-2xl w-[25%] lg:w-56 rotate-12 h-auto brightness-90 translate-y-7"
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-end bg-neutral-500 w-full text-neutral-50 font-light p-8 mt-[27vw] lg:mt-96">
        <h3 className="font-bold text-2xl md:text-4xl text-center pb-6 lg:pb-16">
          Effortless workout tracking: Web & Mobile.
        </h3>
        <div className="flex flex-col items-center gap-3 lg:gap-10">
          <div className="flex flex-col items-center justify-center relative mb-8">
            <h4 className="text-3xl font-normal pb-1">Pricing:</h4>
            <PieChart
              datatitle="dollars"
              data={[
                { label: "Free", value: 0.00001 },
                { label: "Very free", value: 0.00003 },
              ]}
              height={220}
              width={240}
            ></PieChart>
          </div>
          <div className="flex gap-5 items-center">
            <Image
              alt="rat with graphics behind"
              src={"/landing/stats-rat.png"}
              width={220}
              height={220}
              className="hidden lg:flex rounded-full shadow-md"
            ></Image>
            <h3 className="text-xl font-light text-center bg-neutral-700 rounded-lg p-3 max-w-md lg:p-7">
              This application will completely enhance your training experience,
              putting an end to your stagnation with precise methods, and
              allowing you to compare your progress with friends.
            </h3>
          </div>
        </div>
      </div>
      <footer className="bg-neutral-700 p-3 rounded-md gap-7 flex relative mt-7 lg:mt-20">
        <div className="flex flex-col justify-end">
          <h4>Daniel Romero Hernandez</h4>
          <h4>da.romero.hernandez@gmail.com</h4>
        </div>
        <a
          target="blank"
          href="https://es.linkedin.com/in/daniel-romero-hern%C3%A1ndez-bba256228/en?trk=people-guest_people_search-card"
          className="absolute right-3 bottom-3"
        >
          <Image
            alt="Linkedin Logo"
            src={"/landing/linkedin.png"}
            width={45}
            height={45}
            className="h-8 w-auto"
          />
        </a>
      </footer>
    </div>
  );
}
