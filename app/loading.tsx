import { IconCircleDotted } from "@tabler/icons-react";

const Loading = () => {
  return (
    <section className=" mx-auto grid max-w-screen-xl place-items-center gap-10  px-3 py-20 ">
      <IconCircleDotted className=" animate-spin-slow" size={50} />
    </section>
  );
};

export default Loading;
