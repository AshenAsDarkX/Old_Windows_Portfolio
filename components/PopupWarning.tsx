"use client";

import React from "react";
import OldButton from "./OldButton";
import * as Dialog from "@radix-ui/react-dialog";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import warningImage from "@/public/warning.png";

type PopupWarningProps = {
  text: string;
  link?: string;
  buttonStyles?: string;
};

export default function PopupWarning(props: PopupWarningProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <OldButton text={props.text} className={props.buttonStyles} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="" />
        <Dialog.Content className="bg-windows-neutral fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] border-2 border-b-gray-500 border-l-white border-r-gray-500 border-t-white focus:outline-none">
          <div className="bg-windows-blue flex justify-between p-1 text-white">
            <Dialog.Title className="m-0 text-[17px] font-medium">
              Warning
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="" aria-label="Close">
                <div className="closeButtonHover items-center justify-center border-2 border-solid border-black ">
                  <div className="bg-windows-neutral border-2 border-b-gray-500 border-l-white border-r-gray-500 border-t-white">
                    <p className="border-2 border-dotted border-gray-300 leading-none">
                      <IoCloseSharp />
                    </p>
                  </div>
                </div>
              </button>
            </Dialog.Close>
          </div>
          <div className="flex items-center">
            <Image width={100} alt="warning" src={warningImage} />
            <p>
              You'll be redirected to another page. Do you wish to continue?
            </p>
          </div>
          <div className="flex justify-end pb-3 pr-3">
            <Dialog.Close asChild>
              <button>
                <OldButton text="Continue" link={props.link} />
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
