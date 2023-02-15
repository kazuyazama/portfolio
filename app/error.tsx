"use client"; // Error components must be Client components

import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className=" mx-auto grid max-w-screen-xl place-items-center gap-10  px-3 py-20 ">
      <div className="flex flex-col items-center gap-10 text-center">
        <h1>予期せぬエラーが発生しました。</h1>
        <Link href="/">
          <PrimaryButton type="button">HOMEページに戻る</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
