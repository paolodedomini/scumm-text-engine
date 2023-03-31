import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ContextData } from "@/context/context";
import LayoutMain from "@/layout/layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextData>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </ContextData>
  );
}
