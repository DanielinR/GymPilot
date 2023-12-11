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

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
    <div className="flex h-screen w-screen bg-color-primary overflow-hidden">
      <div className="flex flex-1 xl:flex-initial flex-col gap-8 items-center justify-center w-2/5 bg-color-info-back">  
        <Image className="w-auto h-[35%]" alt="app icon" src={"/icon.png"} height={316} width={280}></Image>
        <form className="flex flex-col gap-10 items-center w-full p-2 mb-36">
          <div className="flex flex-col justify-between items-center w-full h-32">
            <LoginInput setValue={setUsername} tittle="Username" type="text" SvgIcon={UserIcon}/>
            <LoginInput setValue={setPassword} tittle="Password" type="password" SvgIcon={KeyIcon}/>
          </div>
          <LoginButton username={username} password={password}/>
        </form>
      </div>
      <div className="xl:flex hidden h-full flex-1 flex-col justify-center items-center self-center">
        <div className="text-color-font text-center">
          <h1 className="text-5xl">WELCOME TO</h1>
          <h1 className="text-9xl font-bold mb-6 text-color-secondary text-stroke">GYM-PILOT</h1>
        </div>
        <Image className="bg-color-info-back rounded-full border-2 border-color-secondary" alt="rat lifting decoration image" width={650} height={650} src={"/login_image.png"}></Image>
      </div>
    </div>
  );
}
