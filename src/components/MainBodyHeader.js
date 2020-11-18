import React from 'react';
import { MainBodyNav } from '../styles/MainStyle';
import Logo from '../assets/images/logo.PNG';
import DownArrow from '../assets/images/drop_down_icon.PNG';
export default function MainBodyHeader() {
  return (
    <MainBodyNav>
      <p>
        Contact Us <img src={DownArrow} alt="drops" />
      </p>
      <img src={Logo} alt="logo" />
    </MainBodyNav>
  );
}
