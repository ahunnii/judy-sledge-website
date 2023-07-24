import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import type { FC } from "react";

interface IProps {
  title: string;
  price: number;
  image: string;
  category: string;
}
const ProductCard: FC<IProps> = ({ title, price, image, category }) => {
  return (
    <div>
      <div className="relative flex aspect-[9/12] ">
        <Image
          layout="fill"
          src={image}
          alt="hero"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded"
        />
        <button className=" absolute bottom-0 right-0 m-2 h-10 w-10 rounded-full bg-white  font-extrabold tracking-tight text-accent  transition hover:text-accent/75">
          <span className="sr-only">Go to Product</span>
          <PlusCircleIcon className="absolute left-0 top-0 h-10 w-10" />
        </button>
      </div>
      <div className="flex w-full items-center ">
        <div className="w-4/5">
          <h4 className="relative text-2xl font-light capitalize tracking-tight text-default">
            {category}
          </h4>
          <h4 className="relative  text-3xl font-semibold capitalize tracking-tight text-default ">
            {title}
          </h4>
        </div>

        <p className="w-1/5 text-3xl font-bold text-accent">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
