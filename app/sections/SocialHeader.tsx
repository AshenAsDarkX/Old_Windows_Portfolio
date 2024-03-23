import OldButton from "@/components/OldButton";
import React from "react";
import linkedInIcon from "@/public/linkedin-icon.svg";
import GithubIcon from "@/public/github-icon.svg";
import EmailIcon from "@/public/email-icon.svg";

export default function SocialHeader() {
  return (
    <div className="hidden lg:flex w-full top-0 left-0 max-w-7xl pt-5 items-center justify-between px-10">
        <p className="font-bold text-4xl">himeshana.dev</p>
        <div className="flex gap-4">

      <OldButton
        text="LinkedIn"
        image={linkedInIcon}
        link="https://www.linkedin.com/in/ashen-himeshana/"
        />
      <OldButton
        text="GitHub"
        image={GithubIcon}
        link="https://github.com/AshenAsDarkX"
        />
      <OldButton
        text="Email"
        image={EmailIcon}
        link="mailto:ashenhimeshana@gmail.com"
        />
        </div>
    </div>
  );
}
