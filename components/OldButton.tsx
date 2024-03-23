import React from "react";

type ButtonPropType = {
  text: string;
};

export default function OldButton(props: ButtonPropType) {
  return (
    <div className="items-center justify-center border-2 border-solid border-black">
      <div className="border-2 border-b-gray-500 border-l-white border-r-gray-500 border-t-white bg-gray-300 px-3 py-1">
        <p className="border-2 border-gray-300 px-3 leading-none hover:border-dotted hover:border-black">
          {props.text}
        </p>
      </div>
    </div>
  );
}
