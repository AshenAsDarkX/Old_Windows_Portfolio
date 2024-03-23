"use client";
import OldButton from "@/components/OldButton";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import me from "@/public/me.svg";
import Image from "next/image";
import PopupWarning from "@/components/PopupWarning";
import IconButton from "@/components/IconButton";

import linkedInIcon from "@/public/linkedin-icon.svg";
import GithubIcon from "@/public/github-icon.svg";
import EmailIcon from "@/public/email-icon.svg";

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
    <div className="relative flex max-h-fit min-h-[100dvh] flex-col-reverse items-center justify-center lg:min-h-[90vh] lg:flex-row">
      <div className="grid basis-1/2 place-content-center">
        <Image
          alt="me"
          src={me}
          width={300}
          className="scale-90 md:scale-125 md:pt-5 lg:scale-100 lg:pt-0"
        />
      </div>
      <div className="flex basis-1/2 flex-col items-center gap-4 md:gap-6 lg:items-start lg:gap-0">
        <h1 className="text-center text-5xl font-bold md:text-8xl lg:text-left">
          <span className="text-3xl md:text-5xl">Hey!!</span>
          <br />
          I&#39;m Ashen
          <br />
          Himeshana
        </h1>

        <h2 className="text-lg text-black md:text-4xl lg:text-3xl">
          {text}
          <Cursor />
        </h2>
        <div className="flex gap-2 lg:hidden">
          <IconButton
            isIcon={false}
            image={linkedInIcon}
            link="https://www.linkedin.com/in/ashen-himeshana/"
          />
          <IconButton
            isIcon={false}
            image={GithubIcon}
            link="https://github.com/AshenAsDarkX"
          />
          <IconButton
            isIcon={false}
            image={EmailIcon}
            link="mailto:ashenhimeshana@gmail.com"
          />
        </div>
        <PopupWarning
          text="Resume"
          buttonStyles="mt-7 mb-14"
          link="https://drive.google.com/file/d/1yUQkkJiCTHsYWWNu_4qup-oteuyRWOQy/view?usp=drive_link"
        />
      </div>
      <p className="keepscroll-animation bottom-8 hidden lg:absolute lg:block">
        Keep scrolling
      </p>
    </div>
  );
}

const Cursor = () => {
  return <span>_</span>;
};
