import PopupWarning from "@/components/PopupWarning";
import OldButton from "@/components/OldButton";
import Image from "next/image";
import Hero from "@/app/sections/Hero";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto max-w-6xl px-4 lg:p-0">
        <Hero />
        <Technologies />
        <Projects />
      </div>
    </main>
  );
}
