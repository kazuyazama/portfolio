import { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"button">;

const PrimaryButton = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${props.className} rounded-lg bg-yellow-400 py-2 px-5  font-bold tracking-wider shadow-xl duration-500 hover:-translate-y-0.5 hover:bg-yellow-500`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
