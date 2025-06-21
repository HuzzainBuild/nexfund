"use client";

import Button from "@/components/Button";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="w-full fixed top-0 left-0 bg-black/50  py-4 px-4 lg:px-10 xl:px-12 z-100 flex justify-between items-center  border-b-gray-700">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl text-white">NexFund</h1>
        </div>

        <ul className="hidden md:flex gap-5 lg:gap-6 xl:gap-8 item-center  font-medium text-white">
          <li className="cursor-pointer font-semibold text-gray-400 hover:text-white transition duration-700">
            Home
          </li>
          <li className="cursor-pointer font-semibold text-gray-400 hover:text-white transition duration-700">
            Web-3 Service
          </li>
          <li className="cursor-pointer font-semibold text-gray-400 hover:text-white transition duration-700">
            About
          </li>
          <li className="cursor-pointer font-semibold text-gray-400 hover:text-white transition duration-700">
            Contact
          </li>
        </ul>

        <Button type={"btn"} title={"Get Started"} />

        <div
          className="md:hidden flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#ffffff"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#ffffff"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </nav>

      {isOpen && (
        <section className="fixed z-40 top-0 left-0 w-full h-screen bg-black/20 backdrop-blur-xl transition-all duration-700 ease-in-out"></section>
      )}
      {isOpen && (
        <section className="absolute z-40 top-[100px] text-2xl font-semibold transition-all duration-700 ease-in-out w-full flex justify-center">
          <ul className="text-center flex flex-col gap-6 uppercase">
            <li className="nav_links">Home</li>
            <li className="nav_links">Web-3 Service</li>
            <li className="nav_links">About</li>
            <li className="nav_links">Contact</li>
          </ul>
        </section>
      )}
    </header>
  );
};

export default Navbar;
