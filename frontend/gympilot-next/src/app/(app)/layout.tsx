
"use client";

import LogoWithLetters from "@/components/LogoWithLetters";
import CheckLogin from "@/components/login/CheckLogin";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CheckLogin>
      <div className="z-0 flex fullheight w-screen overflow-hidden bg-[url('/background.png')] bg-cover">
        <Navbar></Navbar>
        <main className="relative bg-neutral-200 bg-opacity-50 backdrop-blur-sm fullheight w-full flex-1 overflow-hidden transition-width pt-16 md:pt-0">
          <div className='fixed left-1/2 top-1 -translate-x-1/2 md:hidden'>
            <LogoWithLetters></LogoWithLetters>
          </div>
          {children}
        </main>
      </div>
    </CheckLogin>
  );
}
