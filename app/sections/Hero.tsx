"use client";
import OldButton from "@/components/OldButton";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import me from "@/public/me.svg";
import Image from "next/image";
import PopupWarning from "@/components/PopupWarning";
export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Software Engineer Undergraduate",
      "Graphic Designer",
      "Web Developer",
      "Anime Weeb",
    ],
    loop: true,
  });
  return (
    
      <div className="flex h-[90vh] relative items-center justify-center">
        <div className="grid basis-1/2 place-content-center">
          <Image alt="me" src={me} width={300} />
        </div>
        <div className="flex basis-1/2 flex-col items-start">
          <h1 className="text-8xl font-bold">
            <span className="text-5xl">Hey!!</span>
            <br />
            I'm Ashen
            <br />
            Himeshana
          </h1>

          <h2 className="text-lg text-black sm:text-2xl">
            {text}
            <Cursor />
          </h2>
          <PopupWarning text="Resume" buttonStyles="mt-7 mb-14" />
        </div>
        <p className="absolute bottom-8 keepscroll-animation">Keep scrolling</p>
      </div>

  );
}

const Cursor = () => {
  return <span>_</span>;
};
