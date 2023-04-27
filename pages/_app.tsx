import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Roboto_Mono, Outfit } from "@next/font/google";
import { ContextData } from "@/context/context";
import LayoutMain from "@/layout/layout";
const title = Outfit({ weight: "400", preload: false });
const text = Roboto_Mono({ weight: "400", preload: false });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextData>
      <div className="overlays"></div>
      <LayoutMain>
        <style jsx global>{`
          h1 {
            font-family: ${title.style.fontFamily};
          }
          body {
            font-family: ${text.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </LayoutMain>
    </ContextData>
  );
}
