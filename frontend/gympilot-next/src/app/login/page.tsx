"use client";

import LoginInput from "@/components/login/LoginInput";
import LoginButton from "@/components/login/LoginButton";
import Image from "next/image";
import "@/components/login/style.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkAuth } from "@/libs/data";
import UserIcon from "@/components/svg/UserIcon";
import KeyIcon from "@/components/svg/KeyIcon";
import LogoWithLetters from "@/components/LogoWithLetters";
import ErrorIcon from "@/components/svg/ErrorIcon";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const verifyAuth = async () => {
      const isAuth = await checkAuth();
      if (isAuth) {
        router.push('/');
      }
    };

    verifyAuth();
  }, [router]);

  return (
    <div className="flex h-screen w-screen bg-[url('/loginBackground.png')] bg-cover bg-center overflow-hidden items-center justify-center shadow-2xl">
      <div className='fixed left-1/2 top-0 -translate-x-1/2 md:left-0 md:translate-x-0'>
        <LogoWithLetters></LogoWithLetters>
      </div>
      <form className="flex flex-col gap-12 items-center justify-center bg-neutral-500 bg-opacity-95 rounded-lg p-16 xl:w-1/3 w-[90%] sm:w-auto">
        <div className="flex flex-col justify-between items-center w-full gap-2">
          <span className="font-bold text-5xl text-white pb-6">Sign in</span>
          <LoginInput setValue={setUsername} tittle="Username" type="text" SvgIcon={UserIcon} />
          <LoginInput setValue={setPassword} tittle="Password" type="password" SvgIcon={KeyIcon} />
          {errorMessage && <div className=" bg-error-300 px-2 py-1 rounded-lg flex gap-2 items-center">
            <ErrorIcon className="h-7 w-7 text-error-700"></ErrorIcon>
            <span className="text-error-700 font-bold text-xl">Invalid credentials</span>
          </div>}
        </div>
        <LoginButton username={username} password={password} setError={setErrorMessage}/>
      </form>
    </div>
  );
}
