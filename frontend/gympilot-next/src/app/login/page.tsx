import LoginInput from "@/components/login/LoginInput";
import LoginButton from "@/components/login/LoginButton";
import Image from "next/image";
import "@/components/login/style.css"

export default function LoginPage() {

  return (
    <div className="flex h-screen w-screen bg-color-primary overflow-hidden">
      <div className="flex flex-1 xl:flex-initial flex-col gap-8 items-center justify-center w-2/5 bg-color-info-back">  
        <Image className="w-auto h-[35%]" alt="app icon" src={"/icon.png"} height={316} width={280}></Image>
        <div className="flex flex-col gap-10 items-center w-full p-2 mb-36">
          <div className="flex flex-col justify-between items-center w-full h-32">
            <LoginInput tittle="Username" svgPath="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
            <LoginInput tittle="Password" svgPath="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/>
          </div>
          <LoginButton/>
        </div>
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
