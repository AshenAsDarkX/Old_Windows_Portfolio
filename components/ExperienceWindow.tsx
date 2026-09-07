"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import type { ExperienceEntry } from "@/data/experience";

type ExperienceWindowProps = Pick<
  ExperienceEntry,
  "company" | "role" | "dates" | "companyLine" | "bullets" | "tags" | "objectCount"
>;

export default function ExperienceWindow({
  company,
  role,
  dates,
  companyLine,
  bullets,
  tags,
  objectCount,
}: ExperienceWindowProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0" />
      <Dialog.Content
        aria-describedby={undefined}
        className="fixed left-1/2 top-1/2 z-[9999] flex w-[90vw] max-w-[420px] -translate-x-1/2 -translate-y-1/2 flex-col border-2 border-b-[#404040] border-l-white border-r-[#404040] border-t-white bg-windows-neutral shadow-[1px_1px_0_#000] focus:outline-none"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-1.5 py-0.5">
          <Dialog.Title className="m-0 flex items-center gap-1.5 text-xs font-bold text-white">
            <Image src="/folder-icon.png" width={14} height={12} alt="folder" className="flex-shrink-0" />
            {company} Properties
          </Dialog.Title>
          <div className="flex gap-0.5">
            {["_", "□"].map((ch) => (
              <div
                key={ch}
                className="flex h-3.5 w-4 cursor-default select-none items-center justify-center border border-b-[#404040] border-l-white border-r-[#404040] border-t-white bg-windows-neutral text-[10px] font-bold text-black"
              >
                {ch}
              </div>
            ))}
            <Dialog.Close asChild>
              <div className="flex h-3.5 w-4 cursor-pointer select-none items-center justify-center border border-b-[#404040] border-l-white border-r-[#404040] border-t-white bg-windows-neutral text-[10px] font-bold text-black active:border-b-white active:border-l-[#404040] active:border-r-white active:border-t-[#404040]">
                ✕
              </div>
            </Dialog.Close>
          </div>
        </div>

        {/* Menu bar */}
        <div className="flex gap-3 border-b border-[#808080] px-2 py-0.5 text-xs">
          {["File", "Edit", "View", "Help"].map((item) => (
            <span key={item} className="cursor-default hover:bg-[#000080] hover:px-1 hover:text-white">
              {item}
            </span>
          ))}
        </div>

        {/* Body */}
        <div className="p-3">
          <div className="mb-2 flex items-baseline justify-between border-b border-[#808080] pb-1.5">
            <span className="text-[13px] font-bold">{role}</span>
            <span className="text-[11px] text-[#333]">{dates}</span>
          </div>
          <div className="mb-2 text-[11px] text-[#333]">{companyLine}</div>
          <ul className="mb-2.5 list-disc space-y-1 pl-4">
            {bullets.map((b, i) => (
              <li key={i} className="text-[11px] leading-snug">
                {b}
              </li>
            ))}
          </ul>
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-b-[#404040] border-l-white border-r-[#404040] border-t-white bg-windows-neutral px-1.5 py-0.5 text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="border-t border-[#808080] px-2 py-0.5 text-[10px] text-[#333]">
          {objectCount} object(s)
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
