import clsx from "clsx";
import Image from "next/image";
import React from "react";

type ButtonPropType = {
  text: string;
  className?: string;
  image?: any;
  link?: string;
};

export default function OldButton(props: ButtonPropType) {
  return (
    <a href={props.link} target="_blank">
      <div
        className={clsx(
          "oldButtonHover cursor-pointer items-center justify-center border-2 border-solid border-black",
          props.className,
        )}
      >
        <div className="bg-windows-neutral flex items-center border-2 border-b-gray-500 border-l-white border-r-gray-500 border-t-white px-3 py-1">
          {props.image && (
            <Image width={15} src={props.image} alt={props.text} />
          )}
          <p className="">{props.text}</p>
        </div>
      </div>
    </a>
  );
}
