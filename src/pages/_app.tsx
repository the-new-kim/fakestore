import Layout from "@/components/Layout";
import "@/styles/globals.css";

import { AppProps } from "next/app";

import Providers from "@/components/Providers";
import { RootState } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
