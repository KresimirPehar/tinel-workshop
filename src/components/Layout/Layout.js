import React from 'react';
import Header from '../../containers/Header';
import Footer from '../Footer';
import { Container, Content, Children } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <Container>
      <Content>
        <Header />
        <Children>{children}</Children>
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;
