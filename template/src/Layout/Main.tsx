import * as React from "react";
import { Container } from "reactstrap";

export interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <Container>{children}</Container>;
};
