import React, { useState } from 'react';
import { Header as StyledHeader, NavList, NavItem } from '../styles/HomeStyle';
import { Button } from '../styles/globalStyle';
import LogoImage from '../assets/images/logo.PNG';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
function Header(props) {
  const [open, setOpen] = useState(false);
  function onClose() {
    setOpen(false);
  }
  return (
    <StyledHeader>
      <Drawer
        title="Navigation"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={open}
      >
        <MobileNav />
      </Drawer>
      <NavList>
        <Link to="/">
          <NavItem className="mobile_hidden">Home</NavItem>
        </Link>
        <Link to="/">
          <NavItem className="mobile_hidden">About Us</NavItem>
        </Link>
        <Link to="/sendmessage">
          <NavItem className="mobile_hidden">Send SMS</NavItem>
        </Link>
        <Link to="/">
          <NavItem className="mobile_hidden">APIs & Documentation</NavItem>
        </Link>
        <Link to="/">
          <NavItem className="mobile_hidden">Contact Us</NavItem>
        </Link>
        <NavItem className="mobile_hidden">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </NavItem>
        <NavItem className="mobile_hidden">
          <Link to="/signup">
            <Button>Register</Button>
          </Link>
        </NavItem>
        <NavItem>
          <img src={LogoImage} alt="Logo" />
        </NavItem>

        <NavItem className="desktop_hidden">
          <MenuUnfoldOutlined onClick={() => setOpen(!open)} />
        </NavItem>
      </NavList>
    </StyledHeader>
  );
}

function MobileNav() {
  return (
    <NavList mobileNav>
      <NavItem>Home</NavItem>
      <NavItem>About Us</NavItem>
      <NavItem>Send SMS</NavItem>
      <NavItem>APIs & Documentation</NavItem>
      <NavItem>Contact Us</NavItem>
      <NavItem>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/signup">
          <Button>Register</Button>
        </Link>
      </NavItem>
    </NavList>
  );
}
export default Header;
