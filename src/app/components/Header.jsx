"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image'



const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
    {
    title: "Login",
    path: "#Login",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (

    // {Disable fixed navbar for now, will enable later}

    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-40 backdrop-blur-md footer-font overflow-hidden">

      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-normal"
        >
          <Image
            src="/images/anokha2024_logo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-2/5 md:w-4/5"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <HiBars3 className="h-5 w-5 font-bold"/>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <HiXMark className="h-5 w-5 font-bold"/>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;