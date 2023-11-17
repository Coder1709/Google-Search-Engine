import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="">
      <div className="flex justify-end p-5 text-sm space-x-4 items-center">
        <Link
          className="hover:underline"
          href="https://mail.google.com"
          target="_blank"
        >
          Gmail
        </Link>

        <Link
          className="hover:underline"
          href="https://image.google.com"
          target="_blank"
        >
          Image
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-600 text-white text-2xl rounded-md px-6 py-2 font-medium hover:brightness-105 hover:shadow-md transition-shadow"> Sign In</button>
      </div>
    </header>
  );
}
