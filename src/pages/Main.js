import React, { useState } from 'react';
import { MainContainer, MainBody } from '../styles/MainStyle';

import MainContent from '../components/MainContent';
import MainNav from '../components/MainNav';
import MainBodyHeader from '../components/MainBodyHeader';
import { Drawer } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';

export default function Posts() {
  const [open, setOpen] = useState(false);
  return (
    <MainContainer>
      <MenuUnfoldOutlined
        style={{
          position: 'absolute',
          right: 0,
          margin: '20px',
          fontSize: '2rem',
        }}
        onClick={() => setOpen(!open)}
      />
      <Drawer
        title="Navigation"
        placement="left"
        closable={false}
        onClose={() => setOpen(false)}
        visible={open}
        style={{
          padding: 0,
        }}
      >
        <MainNav />
      </Drawer>
      <MainNav desktopOnly />
      <MainBody>
        <MainBodyHeader />
        <MainContent />
      </MainBody>
    </MainContainer>
  );
}
