import OldButton from "@/components/OldButton";
import React from "react";
import linkedInIcon from "@/public/linkedin-icon.svg";
import GithubIcon from "@/public/github-icon.svg";
import EmailIcon from "@/public/email-icon.svg";

export default function SocialHeader() {
  return (
    <div className="left-0 top-0 mx-auto hidden w-full max-w-7xl items-center justify-between px-10 pt-5 lg:flex">
      <p className="text-4xl font-bold">himeshana.dev</p>
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
