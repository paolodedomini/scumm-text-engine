import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import IntroScene from "./rooms/intro";
import { ContextData } from "@/context/context";
import Inventory from "components/inventory/inventory";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ContextData>
        <Inventory />
        <IntroScene />
      </ContextData>
    </>
  );
}
