import * as React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <Navbar color="faded" light>
      <NavbarBrand tag={Link} to="/" className="mr-auto">
        Webapp Name
      </NavbarBrand>
    </Navbar>
  );
};
