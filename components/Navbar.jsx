"use client";

import Button from "@/components/Button";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="w-full fixed top-0 left-0 bg-black/50  py-4 px-4 lg:px-10 xl:px-12 z-100 flex justify-between items-center  border-b-gray-700">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl text-white">NexFund</h1>
        </div>

        <ul className="hidden md:flex gap-5 lg:gap-6 xl:gap-8 item-center  font-medium text-white">
          <li className="nav_links">
            <a href="#hero">Home</a>
          </li>
          <li className="nav_links">
            <a href="#services">Web-3 Service</a>
          </li>
          <li className="nav_links">
            <a href="#features">Features</a>
          </li>
          <li className="nav_links">
            <a href="#about">About</a>
          </li>
          <li className="nav_links">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a href="#contact">
          <Button
            type={"btn"}
            title={"Get Started"}
            className={"hidden md:flex"}
          />
        </a>

        <div
          className="md:hidden flex items-center justify-center cursor-pointer"
          onClick={handleClick}
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

      <section
        className={`fixed z-40 top-0  ${
          isOpen ? "left-0 w-full block" : "-left-[100%] w-0 hidden"
        } h-screen bg-black/20 backdrop-blur-xl transition-all duration-700 ease-in-out`}
      ></section>

      <section
        className={`fixed z-50 top-[100px] left-0 ${
          isOpen ? "left-0 w-full" : "-left-[100%] w-0 hidden"
        } text-2xl font-semibold transition-all duration-700 ease-in-out w-full flex px-4 md:hidden`}
      >
        <ul className="flex flex-col gap-6 ">
          <li onClick={handleClick} className="nav_links">
            <a href="#hero">Home</a>
          </li>
          <li onClick={handleClick} className="nav_links">
            <a href="#services">Web-3 Service</a>
          </li>
          <li onClick={handleClick} className="nav_links">
            <a href="#features">Features</a>
          </li>
          <li onClick={handleClick} className="nav_links">
            <a href="#about">About</a>
          </li>
          <li onClick={handleClick} className="nav_links">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Navbar;
