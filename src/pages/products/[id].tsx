import { RadioGroup } from "@headlessui/react";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
// import { StarIcon as StarHollowIcon } from "@heroicons/react/20/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import Stripe from "stripe";
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface IProps {
  product: Stripe.Product;
  price: Stripe.Price;
}
const demoProducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];
const Product: FC<IProps> = ({ product, price }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const router = useRouter();

  console.log(product);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <a
                  href={"/products"}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  All Products
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href={`/products/${product.id}`}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-5 flex  max-w-7xl gap-6">
          <div className="w-1/2">
            <div className="relative aspect-[9/14] ">
              {product && (
                <Image
                  layout="fill"
                  src={product?.images[0] ?? ""}
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Product image"
                  className="rounded-lg "
                />
              )}
            </div>
          </div>

          <div className="w-1/2">
            <h1 className="text-4xl font-medium">{product.name}</h1>
            {/* Review Component */}
            <section className="flex w-full flex-row items-center  gap-12 py-5">
              <div className="flex gap-2">
                <p>5.0</p>
                <div className="flex flex-row items-center gap-1 ">
                  <StarIcon className="aspect-square h-6 text-yellow-400" />
                  <StarIcon className="aspect-square h-6 text-yellow-400" />
                  <StarIcon className="aspect-square h-6 text-yellow-400" />
                  <StarIcon className="aspect-square h-6 text-yellow-400" />
                  <StarIcon className="aspect-square h-6 text-yellow-400" />
                </div>
              </div>

              <p className="flex font-semibold text-indigo-500">
                Write a review
              </p>
            </section>
            {/* Colors */}
            <section>
              {product?.metadata?.colors && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product?.metadata?.colors.split(",").map((color) => (
                        <RadioGroup.Option
                          key={color}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              // color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              // color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}
            </section>
            {/* Sizes */}
            <section className="mt-10">
              {product?.metadata?.sizes && (
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product?.metadata?.sizes.split(",").map((size) => (
                        <RadioGroup.Option
                          key={size}
                          value={size}
                          // disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              true
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label
                                as="span"
                                className={"uppercase "}
                              >
                                {size}
                              </RadioGroup.Label>
                              {true ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}
            </section>
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
            {/* Product Description */}
            <section className="mt-10">
              <div className="py-5">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-base text-gray-900">{product.description}</p>
              </div>

              <hr />
              <div className="py-5">
                <h3 className="mt-5 text-lg font-semibold">Fabric & Care</h3>

                <ul
                  role="list"
                  className="list-disc space-y-2 pl-4 pt-3 text-sm"
                >
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Only the best materials
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Ethically and locally made
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Pre-washed and pre-shrunk
                    </span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">
                      Machine wash cold with similar colors
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="mx-auto my-5 flex  max-w-7xl flex-col gap-6">
          <h2 className="text-xl font-semibold">Recent Reviews</h2>
          <hr />

          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-row  ">
              <div className="flex w-4/12 flex-col gap-1">
                <p className="font-semibold">John Doe</p>
                <p className="text-xs text-gray-400">August 1st, 2023</p>
              </div>
              <div className="flex w-6/12 flex-col gap-y-5">
                <div className="flex w-6/12 flex-row items-center gap-1">
                  <StarIcon className="aspect-square h-6 text-yellow-400" />
                  <StarIcon className="aspect-square h-6 text-yellow-400" />
                  <StarIcon className="aspect-square h-6 text-yellow-400" />
                  <StarOutlineIcon className="aspect-square h-6 text-yellow-400" />
                  <StarOutlineIcon className="aspect-square h-6 text-yellow-400" />

                  <p className="text-xs text-gray-400">(3)</p>
                </div>

                <h3 className="font-semibold">Awesome Dress!!!</h3>

                <p className="text-base text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  a voluptatum, quibusdam, voluptate, quia quod voluptas
                  voluptatibus quos doloribus quas quidem. Quisquam, quod
                  voluptates. Quisquam, quod voluptates. Quis a voluptatum,
                  quibusdam, voluptate, quia quod voluptas voluptatibus quos
                  doloribus quas quidem. Quisquam, quod voluptates. Quisquam,
                  quod voluptates.
                </p>
              </div>
            </div>
          </div>

          <hr />
        </div>

        <div className="mx-auto my-16 flex  max-w-7xl flex-col gap-6">
          <h2 className="text-xl font-semibold">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {demoProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`${getBaseUrl()}/api/product/${params.id}`);
  const { product, price } = await res.json();

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      price,
    },
  };
}
