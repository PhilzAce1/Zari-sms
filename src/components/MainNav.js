import React from 'react';
import { Nav } from '../styles/MainStyle';
import { NavLink } from 'react-router-dom';

export default function MainNav(props) {
  const NavArr = [
    {
      link: '/sendmessage',
      text: 'Send SMS',
    },
    {
      link: '/sentsms',
      text: 'Sent messages',
    },
    {
      link: '/draft',
      text: 'Draft',
    },
    {
      link: '/phonebook',
      text: 'Send SMS',
    },
    {
      link: '/buysmsunit',
      text: ' Buy SMS Unit',
    },
    {
      link: '/nav',
      text: 'Rate',
    },
  ];
  const mapLink = NavArr.map(({ link, text }, i) => (
    <NavLink key={i} to={link} activeClassName="active_link">
      {text}
    </NavLink>
  ));
  return <Nav>{mapLink}</Nav>;
}
