/* eslint-disable @next/next/no-img-element */

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import type { FC } from "react";
import type Stripe from "stripe";
import ProductCard from "../cards/ProductCard";

interface IProps {
  items: Stripe.Product[];
}
const Featured: FC<IProps> = ({ items }) => {
  return (
    <div className="mx-auto flex w-full flex-col justify-between gap-x-11  ">
      <div className="mx-auto flex w-full max-w-6xl  flex-col justify-between gap-x-11 ">
        <div className="relative z-0 grid grid-flow-col grid-cols-3 grid-rows-2 gap-8">
          <div className="absolute left-1/3 top-1/2 z-10 w-full  translate-x-24 translate-y-4">
            <div className="z-0  w-1/2 rounded-lg bg-opacity-50 bg-gradient-to-r from-accent from-60% to-transparent px-2 py-5">
              <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                Products
              </h2>

              <button className="mt-2.5  border-b-2 border-transparent text-2xl font-bold text-white/75 transition ease-linear hover:border-b-white hover:text-white">
                View All →
              </button>
            </div>
          </div>
          <div className="-rotate-6 scale-110 transform">
            <img
              src="/images/stock_3.png"
              alt=""
              loading="lazy"
              className="aspect-square rounded-xl object-cover shadow"
              sizes="100%"
            />
          </div>
          <div className="translate-y-15 z-10 col-start-3 translate-x-2 rotate-6 scale-75 transform">
            <img
              src="/images/stock_4.png"
              alt=""
              loading="lazy"
              className="aspect-square rounded-xl object-cover shadow"
              sizes="100%"
            />
          </div>

          <div className="translate-y-11 scale-150 transform">
            <img
              src="/images/stock_5.png"
              alt=""
              loading="lazy"
              className="aspect-video rounded-xl object-cover shadow"
              sizes="100%"
            />
          </div>
          {/* 
          <div className="h-56 translate-y-11 scale-150 transform">
            <Image
              src="/images/stock_5.png"
              alt=""
              loading="lazy"
              className="aspect-video rounded-xl object-cover shadow"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 23vw"
              layout="fill"
            />
          </div> */}

          <div className="translate-y-24 transform">
            <img
              src="/images/stock_7.png"
              alt=""
              loading="lazy"
              className="aspect-square rounded-xl object-cover shadow"
              sizes="100%"
            />
          </div>
          <div className="col-span-2 col-start-2 row-start-1 translate-x-20 translate-y-4 transform">
            <img
              src="/images/stock_9.png"
              alt=""
              loading="lazy"
              className="aspect-video rounded-xl object-cover shadow"
              sizes="100%"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-28 flex w-full  max-w-6xl flex-col justify-between gap-x-11">
        <div className="flex  flex-col">
          <h3 className="text-xl font-extrabold tracking-tight text-accent  ">
            Featured
          </h3>
          <h2 className="text-default1 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Bestsellers
          </h2>
        </div>

        <div className="my-5 flex items-stretch gap-x-11">
          {items &&
            items.map((product: Stripe.Product, idx: number) => {
              return (
                <div className=" w-1/4 " key={idx}>
                  <ProductCard
                    id={product.id}
                    title={product.name}
                    price={
                      (product?.default_price?.unit_amount as number) / 100
                    }
                    image={product.images[0] as string}
                    category={product.metadata.category as string}
                  />
                </div>
              );
            })}
          {/* <div className="w-1/4">
            <ProductCard
              title="Lorem Ipsum"
              price={34}
              image="/images/stock_1.png"
              category="Dress"
            />
          </div>{" "}
          <div className="w-1/4">
            <ProductCard
              title="Lorem Ipsum"
              price={34}
              image="/images/stock_2.png"
              category="Dress"
            />
          </div>
          <div className="w-1/4">
            <ProductCard
              title="Lorem Ipsum"
              price={34}
              image="/images/stock_6.png"
              category="Home Decor"
            />
          </div>
          <div className="w-1/4">
            <ProductCard
              title="Lorem Ipsum"
              price={34}
              image="/images/stock_8.png"
              category="Painting"
            />
          </div> */}
        </div>
      </div>{" "}
      <div className="mx-auto  mt-28 flex w-full  max-w-6xl flex-col justify-between gap-x-11">
        <div className="flex  flex-col">
          <h3 className="text-xl font-extrabold tracking-tight text-accent  ">
            Collections
          </h3>
          <h2 className="text-5xl font-extrabold tracking-tight text-default sm:text-[5rem]">
            Featured Collections
          </h2>
        </div>

        <div className="my-5 grid grid-cols-2 gap-4">
          {" "}
          <div className="col-span-1 ">
            <div className="relative aspect-[9/12] ">
              <Image
                layout="fill"
                src="/images/dress_stock.png"
                alt="hero"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded"
              />
              <button className="absolute bottom-0 right-0 m-4 rounded-full border-4 border-white/80 bg-primary p-4  font-extrabold tracking-tight  transition ">
                <span className="sr-only">Go to Clothing</span>
                <ArrowUpRightIcon className=" h-8 w-8 text-white" />
              </button>

              <h3 className="absolute left-0 top-0 p-4  text-6xl font-bold tracking-tight text-white">
                Clothing
              </h3>
            </div>
          </div>{" "}
          <div className="col-span-1 grid grid-rows-2 gap-4 ">
            <div className="relative row-span-1 ">
              <Image
                layout="fill"
                src="/images/art_stock.png"
                alt="hero"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded"
              />
              <button className="absolute bottom-0 right-0 m-4 rounded-full border-4 border-white/80 bg-primary p-4  font-extrabold tracking-tight  transition">
                <span className="sr-only">Go to Art</span>
                <ArrowUpRightIcon className="h-8 w-8 text-white" />
              </button>{" "}
              <h3 className="absolute bottom-0 left-0 p-4  text-6xl font-bold tracking-tight text-white">
                Art
              </h3>
            </div>

            <div className="relative row-span-1 ">
              <Image
                layout="fill"
                src="/images/stock_6.png"
                alt="hero"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded"
              />
              <button className="absolute bottom-0 right-0 m-4 rounded-full border-4 border-white/80 bg-primary p-4  font-extrabold tracking-tight  transition">
                <span className="sr-only">Go to Home Decor</span>
                <ArrowUpRightIcon className="h-8 w-8 text-white" />
              </button>{" "}
              <h3 className="right-left absolute bottom-0 p-4  text-6xl font-bold tracking-tight text-white">
                Home Decor
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
