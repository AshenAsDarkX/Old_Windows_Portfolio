import clsx from "clsx";
import Image from "next/image";
import React from "react";

type IconButtonProps = {
  isIcon: boolean;
  iconComponent?: any;
  className?: string;
  image?: any;
  link?: string;
};

export default function IconButton(props: IconButtonProps) {
  return (
    <a href={props.link} target="_blank">
      <div
        className={clsx(
          "oldButtonHover cursor-pointer items-center justify-center border-2 border-solid border-black",
          props.className,
        )}
      >
        <div className="bg-windows-neutral flex items-center border-2 border-b-gray-500 border-l-white border-r-gray-500 border-t-white p-1">
          {!props.isIcon && props.image ? (
            <Image width={15} src={props.image} alt="" />
          ) : props.isIcon && props.iconComponent ? (
            <props.iconComponent />
          ) : (
            ""
          )}
        </div>
      </div>
    </a>
  );
}
