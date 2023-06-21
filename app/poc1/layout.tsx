"use client";

import Provider from "@components/poc_1/providers/Provider";
import Header from "@components/poc_1/header";
import { ReactNode } from "react";

const Poc1Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <h1 className="text-cyan-500 text-4xl text-center mt-2">
            Poc_1 Layout
          </h1>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default Poc1Layout;
