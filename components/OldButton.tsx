import clsx from "clsx";
import Image from "next/image";
import React from "react";

type ButtonPropType = {
  text: string;
  className?: string;
  image?: any;
  selected?:boolean
  link?: string;
};

export default function OldButton({selected = false,...props}: ButtonPropType) {
  return (
    <a href={props.link} target="_blank">
      <div
        className={clsx(
          "oldButtonHover cursor-pointer items-center justify-center border-2 border-solid ",
          props.className,
          !selected && "border-black",
          selected && "border-transparent"
        )}
      >
        <div className={clsx("bg-windows-neutral flex items-center border-2 px-3 py-1",!selected && "border-b-gray-500 border-l-white border-r-gray-500 border-t-white",selected && "border-t-gray-500 border-r-white border-l-gray-500 border-b-white")}>
          {props.image && (
            <Image width={15} src={props.image} alt={props.text} />
          )}
          <p className="">{props.text}</p>
        </div>
      </div>
    </a>
  );
}