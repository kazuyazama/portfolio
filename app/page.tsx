import Image from "next/image";
import Link from "next/link";
import TitleText from "@/components/TitleText";
import PrimaryButton from "@/components/PrimaryButton";
import Form from "@/components/Form";

import { skills } from "@/assets/skills";
import { projects } from "@/assets/projects";

export default async function Home() {
  return (
    <main className="">
      <section
        className=" mx-auto grid max-w-screen-xl place-items-center gap-10  overflow-x-hidden px-3 py-20 "
        id="top"
      >
        <div className="flex  flex-col items-center gap-3 text-center lg:gap-7">
          <h1 className="lead">Hello, I'm Modern Frontend Developer</h1>
          <p className=" max-w-4xl lg:text-xl">
            こんにちは。私はモダンなフロントエンドエンジニアです。ReactとNEXT.jsが好きです。
          </p>
        </div>
        <Image
          src="/hero-image.svg"
          width={800}
          height={300}
          alt="Web deleveloper"
        />
      </section>

      {/* section間の幅 */}
      <div className="grid gap-20">
        <section
          className=" relative h-[600px] -scroll-mt-12  overflow-x-hidden bg-gradient-to-r from-primary-sky to-primary-blue px-3 lg:h-[480px]  lg:px-10 "
          id="about"
        >
          <div className=" mx-auto flex  max-w-4xl flex-col items-center justify-center gap-10 py-20 text-white ">
            <TitleText>ABOUT</TitleText>
            <p className=" ">
              こんにちは。私はwebサイトとwebアプリケーションを構築するフロントエンドエンジニアです。
              エンジニア歴は2年です。
              <br className="lg:hidden" />
              新しい技術を学ぶことが好きで現在の開発では主にjavascript
              FWのReactとNEXT.jsを使用しています。
              過去に営業経験もございますので、お客様の要望を的確に汲み取り、実現することが得意です。
              <br className="lg:hidden" />
              開発のご相談などございましたらお気軽にページ下のコンタクトフォームよりお問い合わせください。
            </p>
          </div>
        </section>
        <section className="z-50 -my-48 mx-auto w-full  max-w-screen-xl overflow-x-hidden px-3 lg:-my-52">
          <article className="rounded-lg border bg-white">
            <h2 className="py-7 text-center  text-primary-blue">保有スキル</h2>
            <div className=" grid justify-items-center lg:grid-cols-3  ">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className=" flex w-full flex-col items-center gap-5 border-t py-10 px-5 text-center [&:not(:last-child)]:border-r"
                >
                  <div className=" rounded-full bg-primary-sky p-3">
                    <skill.icon />
                  </div>

                  <h2>{skill.title}</h2>
                  <h3 className=" font-semibold">{skill.description}</h3>

                  <ul className=" font-inter">
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

        <section
          className="  mt-40 -scroll-mt-12 overflow-x-hidden px-3 lg:mt-32 "
          id="projects"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center  justify-center gap-10 py-20  ">
            <TitleText>PROJECTS</TitleText>
            <p>
              私が作成した個人プロジェクトとクライアント
              プロジェクトの一部を紹介します。
            </p>
          </div>
          <div className="grid gap-20">
            {projects.map((item) => (
              <article
                key={item.path}
                className="mx-auto flex max-w-screen-xl flex-col items-center gap-5 lg:flex-row "
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1000}
                  height={300}
                  className=" basis-1/3 object-cover"
                  sizes="100vw"
                />
                <div className=" flex flex-col items-center gap-5 lg:items-start lg:gap-3">
                  <h2>{item.title}</h2>

                  <ul className="flex gap-3">
                    {item.use.map((use, length) => (
                      <li
                        key={length}
                        className=" break-words rounded-md bg-primary-sky px-1 py-1 font-inter text-xs text-white opacity-80 lg:px-2 lg:text-sm"
                      >
                        {use}
                      </li>
                    ))}
                  </ul>
                  <p className="text-center lg:text-start">
                    {item.descripttion}
                  </p>
                  <Link href={item.path}>
                    <PrimaryButton type="button">Visit Site</PrimaryButton>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          className="  h-[480px]  -scroll-mt-12 overflow-x-hidden bg-gradient-to-r from-primary-sky to-primary-blue px-3 lg:px-10"
          id="contact"
        >
          <div className="mx-auto flex  max-w-4xl flex-col items-center justify-center gap-10 py-20 text-white ">
            <TitleText>CONTACT</TitleText>
            <p>
              お気軽にお問い合わせください。できるだけ早くご返信いたします。
            </p>
          </div>
        </section>
        <section className="z-50 -my-72 mx-auto w-full  max-w-screen-xl overflow-x-hidden px-3 lg:-my-72 ">
          <article className=" rounded-lg border bg-white">
            <div className=" grid   ">
              <Form />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
