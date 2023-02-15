import { ComponentProps, ReactNode } from "react";

type Props = {
    children:ReactNode 
} & ComponentProps<'h1'>

const TitleText = ({children,...props}:Props) => {
  return (
    <h1 {...props} className="relative after:absolute after:lg:top-12 after:left-1/2 after:top-10 after:my-2 after:w-8 after:-translate-x-1/2 after:rounded-3xl after:border-b-4 after:border-yellow-400">
      {children}
    </h1>
  );
};

export default TitleText;
