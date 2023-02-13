import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="" id="home">
      <section className="mx-auto grid max-w-screen-xl grid-flow-col items-center justify-between px-3 py-6">
        <div className=" flex items-center gap-3">
          <Image
            width={50}
            height={50}
            src="/avater.svg"
            alt="Kazuya Zama"
            className="inline-block h-12 w-12 overflow-hidden rounded-full bg-yellow-400  "
          />
          {/* <Image width={50} height={50} src="/div.svg" alt="avater" className="px-1 object-cover" /> */}
          <h2>Kazuya Zama</h2>
        </div>

        <nav>
          <ul className=" flex gap-10 font-bold ">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
