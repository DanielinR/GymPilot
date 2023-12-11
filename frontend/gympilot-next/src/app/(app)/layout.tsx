
"use client";

import CheckLogin from "@/components/login/CheckLogin";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CheckLogin>
      <div className="z-0 flex h-screen w-screen overflow-hidden">
        <Navbar></Navbar>
        <main className="bg-color-primary relative h-screen w-full flex-1 overflow-hidden transition-width">
          {children}
        </main>
      </div>
    </CheckLogin>
  );
}
