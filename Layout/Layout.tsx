import React, { ReactChildren } from 'react';
import { Header } from 'components/index';
import styled from 'styled-components';

interface LayoutPropType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutPropType) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
