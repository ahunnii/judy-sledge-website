import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mx-auto flex  w-full max-w-6xl justify-between gap-x-11 py-28">
      <div className=" w-3/5 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-default sm:text-[5rem]">
          Judy <span className="text-accent">Sledge</span> Designs
        </h1>

        <p className="my-5 py-5 text-lg  text-default">
          Lorem excepteur enim enim eu minim amet. Dolor consectetur proident
          occaecat id sunt ex ex eu. Amet esse ipsum irure eu mollit dolor sit
          quis. Sit cupidatat quis et anim mollit sint. Et veniam consectetur
          Lorem tempor tempor id reprehenderit irure adipisicing veniam irure
          eiusmod dolore.
        </p>

        <Link
          className="rounded-full bg-primary/10 px-10 py-3 font-semibold text-default no-underline transition hover:bg-primary/20"
          href="/products"
        >
          Shop Now
        </Link>
      </div>

      <div className=" relative aspect-square w-2/5 ">
        <Image
          layout="fill"
          src="/images/hero.png"
          alt="hero"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded"
        />
      </div>
    </div>
  );
};
export default Hero;
