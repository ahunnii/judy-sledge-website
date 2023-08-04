import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Link from "next/link";
import { CartProvider } from "use-shopping-cart";
import Navigation from "~/components/layout/Navigation";

import "~/styles/globals.css";
import { api } from "~/utils/api";
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  //  TODO: Figure out what color scheme is desired... bg-gradient-to-b from-[#2e026d] to-[#15162c]
  return (
    <SessionProvider session={session}>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        // Connects to your Stripe account
        stripe={process.env.NEXT_PUBLIC_STRIPE_PK ?? ""}
        // Redirected here after successful payments
        successUrl={`${process.env.NEXT_PUBLIC_URL ?? ""}/success`}
        // Redirected here when you click back on Stripe Checkout
        cancelUrl={`${process.env.NEXT_PUBLIC_URL ?? ""}/?success=false`}
        currency="USD"
        // Only customers from UK will be able to purchase
        // Having this setting means that we will capture shipping address
        allowedCountries={["US"]}
        // Enables local storage
        shouldPersist={true}
      >
        <Navigation />
        <Component {...pageProps} />
        <footer className=" w-full border-t border-t-primary p-4 text-center text-sm font-semibold text-white">
          <div className="mx-auto flex w-full max-w-6xl justify-between text-primary/50 ">
            <span>&copy; Copyright 2023. All rights reserved.</span>

            <div className="flex gap-11 ">
              <Link href="#!">Privacy Policy</Link>
              <Link href="#!">Shipping Policy</Link>
            </div>
          </div>
        </footer>
      </CartProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
