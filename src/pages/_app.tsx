import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Navigation from "~/components/layout/Navigation";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className=" bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Navigation />
        <Component {...pageProps} />
        <footer className=" w-full border-t border-t-[hsl(265,96%,25%)] p-4 text-center text-sm font-semibold text-white">
          <div className="v mx-auto flex w-full max-w-6xl justify-between ">
            <span>&copy; Copyright 2023. All rights reserved.</span>

            <div className="flex gap-11 ">
              <span>Privacy Policy</span>
              <span>Shipping Policy</span>
            </div>
          </div>
        </footer>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
