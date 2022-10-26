import React, { useState, useContext } from "react";

import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true);
  };
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        {" "}
        <Link to="/" className="text-white">
          {" "}
          Github fire up{" "}
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : "Noneeee"}
        {console.log(context.user)}
      </NavbarText>

      <NavbarToggler onClick={toggle}></NavbarToggler>

      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink tag={Link} to="/logout" className="text-danger">
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  Signin
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
