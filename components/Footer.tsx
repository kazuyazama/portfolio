import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[400px] bg-gradient-to-r from-primary-sky to-primary-blue overflow-x-hidden ">
      <section className="mx-auto  grid  max-w-screen-xl grid-flow-row items-center justify-between gap-10 py-10 px-3 text-white lg:grid-flow-col lg:gap-0">
        <div className="flex  flex-col justify-center   gap-3">
          <h2 className=" font-inter">Kazuya Zama</h2>
          <span className="text-sm">
            モダンなフロントエンド開発をしています。
            <br />
            ReactとNEXT.jsが好きです。
          </span>
        </div>

        <div className="  flex flex-col justify-center gap-3 lg:items-center ">
          <h2 className=" font-inter">SOCIAL</h2>
          <div className="flex gap-3">
            <Link href="https://twitter.com/restarts_kz">
              <IconBrandTwitter color="white" />
            </Link>
            <Link href="https://github.com/kazuyazama">
              <IconBrandGithub color="white" />
            </Link>
          </div>
        </div>
      </section>

      <section className=" relative mx-auto max-w-screen-xl text-white before:absolute before:w-full before:border-t  before:border-gray-100 before:px-3 before:opacity-30 ">
        <span className="block py-5 text-center text-xs ">
          © Copyright 2023. Made by Kazuya Zama
        </span>
      </section>
    </footer>
  );
};

export default Footer;
