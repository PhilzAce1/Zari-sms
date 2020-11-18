import React from 'react';
import { MainContainer, MainBody } from '../styles/MainStyle';

import MainContent from '../components/MainContent';
import MainNav from '../components/MainNav';
import MainBodyHeader from '../components/MainBodyHeader';
export default function Posts() {
  return (
    <MainContainer>
      <MainNav />
      <MainBody>
        <MainBodyHeader />
        <MainContent />
      </MainBody>
    </MainContainer>
  );
}
