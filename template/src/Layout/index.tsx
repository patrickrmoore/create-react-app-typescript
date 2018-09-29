import * as React from "react";
import { Main } from "./Main";
import { Top } from "./Top";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Top />
      <Main>{children}</Main>
    </>
  );
};
