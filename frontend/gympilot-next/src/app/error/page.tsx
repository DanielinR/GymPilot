"use client"

import LogoWithLetters from "@/components/LogoWithLetters";
import { checkAuth } from "@/libs/data";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ErrorPage() {
  const router = useRouter();
  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const isAuth = await checkAuth();
        if (isAuth) {
          router.push("/");
        }else{
          router.push("/login");
        }
      } catch (error) {
      }
    };

    verifyAuth();
  }, [router]);

  return (
    <div className="h-screen w-screen bg-[url('/background3.png')] bg-cover bg-top overflow-hidden shadow-2xl">
      <div className="bg-neutral-300 h-full w-full bg-opacity-40 flex items-center justify-center ">
        <div className="fixed left-1/2 top-0 -translate-x-1/2 md:left-0 md:translate-x-0">
          <LogoWithLetters></LogoWithLetters>
        </div>
        <div className="flex flex-col items-center justify-center bg-neutral-500 bg-opacity-95 rounded-lg p-10 md:p-16 md:w-3/5 xl:w-1/3 w-[90%] sm:w-auto">
          <span className="font-bold text-lg text-white pb-6 text-center">
            Apologies for the inconvenience! Our server is currently undergoing
            maintenance to enhance your experience.
          </span>
          <span className="font-bold text-lg text-white pb-6 text-center">
            We appreciate your patience and will be back shortly.
          </span>
        </div>
      </div>
    </div>
  );
}
