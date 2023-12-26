import Image from "next/image";

export default function LogoWithLetters() {
  return (
    <div className="flex gap-3 items-center">
      <Image alt="logo image" src={"/icon.png"} width={40} height={50} />
      <div className="flex gap-1 items-center">
        <h2 className="shadowText font-extrabold text-2xl text-white">GYM </h2>
        <h2 className="shadowText font-extrabold text-2xl text-brand-500">PILOT</h2>
      </div></div>
  );
}