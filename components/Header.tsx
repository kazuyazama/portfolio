"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const menus = [
    {
      title: "HOME",
      path: "#home",
    },
    {
      title: "ABOUT",
      path: "#about",
    },
    {
      title: "PROJECTS",
      path: "#projects",
    },
    {
      title: "CONTACT",
      path: "#contact",
    },
  ];
  return (
    <header className=" overflow-x-hidden">
      <section className="mx-auto grid max-w-screen-xl grid-flow-col items-center justify-between px-3 py-4 lg:py-6">
        <Link href="/" className=" hover:text-primary-sky">
          <div className=" flex items-center gap-3">
            <Image
              width={50}
              height={50}
              src="/avater.svg"
              alt="Kazuya Zama"
              sizes="32px"
              className="inline-block h-8 w-8 overflow-hidden rounded-full bg-yellow-400 lg:h-12 lg:w-12 object-cover  "
            />

            <h2 className=" font-inter">Kazuya Zama</h2>
          </div>
        </Link>

        {/* PC用nav */}
        <nav className="hidden lg:block">
          <ul className=" flex gap-10 font-bold">
            {menus.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="hover:text-primary-sky "
              >
                <li className=" font-inter">{item.title}</li>
              </a>
            ))}
          </ul>
        </nav>

        {/* sp用nav */}
        <button onClick={handleToggle} className=" lg:hidden">
          <div className="relative flex flex-col gap-1 ">
            <span
              className={`h-[3px] w-[22px]  rounded-2xl bg-black duration-300 ${
                open && "absolute  rotate-45"
              }`}
            ></span>
            <span
              className={`h-[3px] w-[22px] rounded-2xl bg-black duration-300 ${
                open && " opacity-0"
              } `}
            ></span>
            <span
              className={`h-[3px] w-[22px] rounded-2xl bg-black duration-300 ${
                open && "absolute -rotate-45"
              }  `}
            ></span>
          </div>
        </button>

        {open && (
          <nav className="absolute top-16 z-50 -mx-3 w-full animate-slide-fwd-bottom  bg-white lg:hidden  ">
            <ul className=" flex flex-col font-bold first:border-t [&>*]:border-b [&>*]:px-3 [&>*]:py-4  [&>*]:text-end ">
              {menus.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className="hover:text-primary-sky "
                >
                  <li className="">{item.title}</li>
                </a>
              ))}
            </ul>
          </nav>
        )}
      </section>
    </header>
  );
};

export default Header;
