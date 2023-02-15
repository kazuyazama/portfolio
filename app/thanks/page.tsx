"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { inputState } from "@/store/atom";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";

const Thanks = () => {
  const input = useAtom(inputState);

  const { name, email, message } = input[0];

  const router = useRouter();

  console.log(input);

    useEffect(() => {
      const redirect = () => {
        if (!name && !email && !message) {
          return router.push("/");
        }
      };
      redirect();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <section className=" mx-auto grid max-w-screen-xl place-items-center gap-10  px-3 py-20 ">
      <div className="flex flex-col items-center gap-10 text-center">
        <p className=" text-lg ">
          お問い合わせありがとうございました。
          <br />
          担当者よりご連絡をさせていただきます。
        </p>
        <Link href="/">
        <PrimaryButton type="button">HOMEに戻る</PrimaryButton> 
        </Link>
      </div>
    </section>
  );
};

export default Thanks;
