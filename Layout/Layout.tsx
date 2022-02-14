import React, { ReactChild } from 'react';
import { Header } from 'components/index';
import styled from 'styled-components';

interface LayoutPropType {
  children: ReactChild;
}

const Layout = ({ children }: LayoutPropType) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default Layout;
