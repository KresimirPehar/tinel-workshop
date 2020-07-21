import React from 'react';
import Header from '../../containers/Header';
import { Container, Children } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Children>{children}</Children>
    </Container>
  );
};

export default Layout;
