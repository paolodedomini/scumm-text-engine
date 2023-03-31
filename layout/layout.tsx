import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Inventory from "components/inventory/inventory";

const inter = Inter({ subsets: ["latin"] });

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Inventory />
      {children}
    </>
  );
}
