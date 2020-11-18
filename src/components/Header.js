import React from 'react';
import { Header as StyledHeader, NavList, NavItem } from '../styles/HomeStyle';
import { Button } from '../styles/globalStyle';
import LogoImage from '../assets/images/logo.PNG';
function Header(props) {
  return (
    <StyledHeader>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Send SMS</NavItem>
        <NavItem>APIs & Documentation</NavItem>
        <NavItem>Contact Us</NavItem>
        <NavItem>
          <Button>Login</Button>
        </NavItem>
        <NavItem>
          <Button>Register</Button>
        </NavItem>
        <NavItem>
          <img src={LogoImage} alt="Logo" />
        </NavItem>
      </NavList>
    </StyledHeader>
  );
}

export default Header;
