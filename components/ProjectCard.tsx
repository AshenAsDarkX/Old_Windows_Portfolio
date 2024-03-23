import React from "react";
import Image from "next/image";
import Pixilla from "@/public/pixilla.png";
import PopupWarning from "./PopupWarning";

type ProjCardProps = {
  title: string;
  image?: any;
  desc?: string;
  text: string;
  link?: string;
};

export default function ProjectCard(props: ProjCardProps) {
  return (
    <div className=" oldButtonHover mb-4 w-80 cursor-pointer items-center justify-center">
      <div className="border-2 border-b-gray-500 border-l-white border-r-gray-500 border-t-white">
        <div className=" bg-windows-blue text-center text-white">
          <h2>{props.title}</h2>
        </div>
        <div>
          <Image
            src={props.image}
            width={400}
            height={400}
            alt=""
            className="grayscale"
          />
          <div className="flex flex-col items-end p-3">
            <p className="pb-2">{props.desc}</p>
            <PopupWarning text={props.text} link={props.link} />
          </div>
        </div>
      </div>
    </div>
  );
}
