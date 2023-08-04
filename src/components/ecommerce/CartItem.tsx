import Image from "next/image";
import type { FC } from "react";
import type Stripe from "stripe";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";

interface Product extends Stripe.Product {
  id: string;
  image: string;
  quantity: number;
  price: number;
}

interface IProps {
  item: Partial<Product>;
}

const CartItem: FC<IProps> = ({ item }) => {
  const { id, name, image, quantity, metadata, price } = item;
  const { removeItem } = useShoppingCart();

  const removeItemFromCart = () => {
    if (item.id) removeItem(item.id);
  };

  return (
    <>
      {image && (
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <Image
            src={image}
            alt={image}
            layout="fill"
            objectFit="cover"
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={`/products/${id ?? ""}`}>{name}</a>
            </h3>
            <p className="ml-4">
              {" "}
              {formatCurrencyString({ value: price ?? 0, currency: "USD" })}
            </p>
          </div>
          {metadata?.size && (
            <p className="mt-1 text-sm text-gray-500">{metadata?.size}</p>
          )}
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>

          <div className="flex">
            <button
              type="button"
              onClick={() => removeItemFromCart()}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
