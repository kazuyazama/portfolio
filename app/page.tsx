import Image from "next/image";
import { Inter } from "@next/font/google";
import { IconIceCream2 } from "@tabler/icons-react";
import { link } from "fs";

const inter = Inter({ subsets: ["latin"] });

const skills = [
  {
    title: "Vannira",
    description:
      " I value simple content structure, clean design patterns, andthoughtful interactions.",
    li: ["html", "css", "javascript", "typescript"],
  },
  {
    title: "FW",
    description:
      " I value simple content structure, clean design patterns, andthoughtful interactions.",
    li: ["react", "Next.js", "tailwindcss", "hydrogen", "Remix"],
  },
  {
    title: "Tools",
    description:
      " I value simple content structure, clean design patterns, andthoughtful interactions.",
    li: ["Git", "GitHub", "microCMS", "graphQL", "SEO", "figma", "shopify"],
  },
];

export default async function Home() {
  return (
    <main className=" ">
      <section className=" mx-auto grid max-w-screen-xl place-items-center gap-10 border px-3 py-20 ">
        <h1 className="lead">Frontend Developer & CEO</h1>
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
          モダンなフロントエンド
        </p>
        <img src="" alt="" />
        <Image
          src="/undraw_programming_re_kg9v (1).svg"
          width={800}
          height={300}
          alt="kazuyazama"
        />
      </section>

      {/* section間の幅 */}
      <div className="grid gap-20">
        <section
          className=" relative h-[480px]  -scroll-mt-12 bg-gradient-to-r from-primary-sky to-primary-blue px-3 lg:px-20"
          id="about"
        >
          <div className="mx-auto flex  max-w-screen-xl flex-col items-center  justify-center gap-5 py-20 text-white ">
            <h1>私について</h1>
            <p>
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
          </div>
          <article className="mx-auto max-w-screen-xl rounded-lg border  bg-white">
            <div className=" grid grid-cols-3  justify-items-center  ">
              {skills.map((skill) => (
                <div className=" flex  flex-col items-center gap-5 py-10 px-5 text-center [&:not(:last-child)]:border-r">
                  <div className=" rounded-full bg-primary-sky p-3">
                    <IconIceCream2 />
                  </div>

                  <h2>{skill.title}</h2>
                  <p>{skill.description}</p>

                  <ul>
                    <li>{skill.li[0]}</li>
                    <li>{skill.li[1]}</li>
                    <li>{skill.li[2]}</li>
                    {skill.li[3] && <li>{skill.li[3]}</li>}
                    {skill.li[4] && <li>{skill.li[4]}</li>}
                    {skill.li[5] && <li>{skill.li[5]}</li>}
                    {skill.li[6] && <li>{skill.li[6]}</li>}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className=" mt-56 -scroll-mt-12 px-3 lg:px-20" id="about">
          <div className="mx-auto flex max-w-screen-xl flex-col items-center  justify-center gap-5 py-20  ">
            <h1>PROJECTS</h1>
            <p>
              Since beginning my journey as a freelance designer over 11 years
              ago, I've done remote work for agencies, consulted for startups,
              and collaborated with talented people to create digital products
              for both business and consumer use. I'm quietly confident,
              naturally curious, and perpetually working on improving my chops
              one design problem at a time.
            </p>
          </div>
          <article className="mx-auto flex max-w-screen-xl items-center ">
            <Image
              src="/スクリーンショット_2023-02-13_23.02.36-removebg-preview.png"
              alt=""
              width={1000}
              height={300}
              className=" object-cover"
              sizes="100vw"
            />
            <div>
              <h2>Dopefolio</h2>
              <p>
                Dopefolio is a successful Open-Source project that I created
                which have been featured on some of the biggest tech sites like
                CSS-Tricks, Hostinger, etc & used by thousands of developers
                globally
              </p>
              <button>visit site</button>
            </div>
          </article>
        </section>
        <section>a</section>
      </div>
    </main>
  );
}
