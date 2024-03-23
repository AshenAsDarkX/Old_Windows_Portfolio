"use client";

import OldButton from "@/components/OldButton";
import React, { useState } from "react";
import technologies from "@/data/technologies";
import Image from "next/image";
import clsx from "clsx";

const tabs: { name: string; value: string }[] = [
  { name: "Web", value: "web" },
  { name: "Programming", value: "programming" },
  { name: "Mobile", value: "mobile" },
  { name: "Design", value: "design" },
];

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <h2 className="pb-10 text-3xl font-bold lg:text-5xl">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-2 pb-4 lg:pb-8">
        {tabs.map((tab, index) => {
          return (
            <button
              className="h-8"
              key={index}
              onClick={() => {
                setSelectedCategory(tab.value);
                if (tab.value === selectedCategory) setSelectedCategory("");
              }}
            >
              <OldButton
                text={tab.name}
                selected={selectedCategory === tab.value}
              />
              ;
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-4 place-items-center gap-6  lg:grid-cols-8 lg:gap-10">
        {technologies.map((tech, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center gap-1 text-center"
              key={index}
            >
              <Image
                alt=""
                width={60}
                height={60}
                className={clsx(
                  "h-14 w-14 grayscale lg:h-20 lg:w-20",
                  tech.type === selectedCategory && "grayscale-[30%]",
                )}
                src={tech.image}
              />
              <p
                className={clsx(
                  !(tech.type === selectedCategory) && "text-gray-400",
                )}
              >
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
