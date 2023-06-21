"use client";
import Provider from "@components/poc_1/providers/Provider";
import Header from "@components/poc_1/header";
import Link from "next/link";

const Poc1Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <Link href="/" className="text-orange-700 underline">
        Back
      </Link>
      <h1 className="text-cyan-500 text-4xl mt-2 text-center">Poc_1 Layout</h1>
      <Header />
      {children}
    </Provider>
  );
};

export default Poc1Layout;
