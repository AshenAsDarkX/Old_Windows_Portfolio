import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-4 text-center md:py-4 lg:text-left">
      © {new Date().getFullYear()} Design & Developed by Ashen
    </footer>
  );
}
