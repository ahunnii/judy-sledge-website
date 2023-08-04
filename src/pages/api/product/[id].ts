import type Stripe from "stripe";
import { stripe } from "~/server/stripe/client";
export default async (req, res) => {
  const { id } = req.query;

  try {
    const product = await stripe.products.retrieve(id);
    const price = await stripe.prices.list({ product: id, limit: 1 });

    res.status(200).json({ product, price: price.data[0] });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve product" });
  }
};
