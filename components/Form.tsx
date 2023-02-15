"use client";

import { FormEvent, useRef } from "react";
import { inputState } from "@/store/atom";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

import Input from "./Input";
import PrimaryButton from "./PrimaryButton";

const Form = () => {
  const [input, setInput] = useAtom(inputState);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const refData = {
    //   name: nameRef.current?.value,
    //   email: emailRef.current?.value,
    //   message: messageRef.current?.value,
    // };

    input.name =   nameRef.current?.value ?? ""
    input.email = emailRef.current?.value ?? ""
    input.message = messageRef.current?.value ?? ""

    const refData = {
        name:input.name,
        email:input.email,
        message:input.message
    }
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json,text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(refData),
      });
      if (res.status === 200) {
        console.log("メール送信に成功しました");
        setInput(refData)
        router.push("/thanks");
      }
    } catch (error) {
      console.error("エラーが発生しました", error);
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className=" flex flex-col gap-5 py-10 px-3 lg:px-20 "
    >
      <div className="flex flex-col gap-2  ">
        <label
          htmlFor="name"
          className="after:ml-2 after:rounded-md after:bg-red-400 after:px-1 after:py-0.5 after:text-xs after:text-white after:content-['必須']"
        >
          お名前
        </label>
        <Input
          type="text"
          placeholder="山田太郎"
          id="name"
          inputRef={nameRef}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="after:ml-2 after:rounded-md after:bg-red-400 after:px-1 after:py-0.5 after:text-xs after:text-white after:content-['必須']"
        >
          メールアドレス
        </label>
        <Input
          inputRef={emailRef}
          type="email"
          placeholder="yamada@gmail.com"
          id="email"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="after:ml-2 after:rounded-md after:bg-primary-sky after:px-1 after:py-0.5 after:text-xs after:text-white after:content-['任意']"
        >
          お問い合わせ内容
        </label>
        <textarea
          name=""
          id="message"
          placeholder="料金はおいくらですか？"
          rows={8}
          ref={messageRef}
          className=" form-textarea rounded-md bg-gray-100 focus:border-primary-sky"
        ></textarea>
      </div>
      <div className="text-center">
        <PrimaryButton type="submit" className="w-40">
          送信する
        </PrimaryButton>
      </div>
    </form>
  );
};

export default Form;
