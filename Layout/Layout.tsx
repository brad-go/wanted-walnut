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

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default Layout;
