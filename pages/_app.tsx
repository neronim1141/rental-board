import "../styles/globals.css";
import type { AppProps } from "next/app";
import { trpc } from "../utils/trpc";
import { SessionProvider } from "next-auth/react";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <div className="dark h-screen w-screen">
      <div className=" bg-slate-50 dark:bg-[#12121A] dark:text-white h-full w-full">
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </div>
    </div>
  );
};

export default trpc.withTRPC(MyApp);
