import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "~/server/stripe/client";

const FetchProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = typeof req.query.id === "string" ? req.query.id : undefined;

  if (!id) {
    res.status(400).json({ error: "Invalid product ID" });
    return;
  }

  try {
    const product = await stripe.products.retrieve(id);

    // Ensure that the `product` argument in the below line is string and not object.
    const prices = await stripe.prices.list({ product: id, limit: 1 });

    if (prices.data.length === 0) {
      res.status(404).json({ error: "Price not found" });
      return;
    }

    const price = prices.data[0];
    res.status(200).json({ product, price });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve product" });
  }
};

export default FetchProduct;
