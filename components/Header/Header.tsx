import React from 'react';
import Link from 'next/link';
import useScroll from 'hooks/useScroll';
import { NAV_LINKS } from 'utils';
import { COLORS, IMG_PATHS } from 'utils/constants';
import styled from 'styled-components';

interface HeaderStylePropsType {
  backgroundTransparency?: number;
  boxShadow?: number;
  filter: number;
}

const Header = ({}) => {
  const { backgroundTransparency, boxShadow, filter } = useScroll();
  return (
    <Wrapper
      backgroundTransparency={backgroundTransparency}
      boxShadow={boxShadow}
      filter={filter}
    >
      <NavBar>
        <Nav>
          <Link href="/">
            <Logo filter={filter}>
              <img src={IMG_PATHS.HEADER_LOGO} alt="title" />
            </Logo>
          </Link>
          <NavList>
            {NAV_LINKS.map((link, idx) => {
              return (
                <li key={idx}>
                  <Link href={link.path}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              );
            })}
          </NavList>
        </Nav>
      </NavBar>
    </Wrapper>
  );
};

const Wrapper = styled.header<HeaderStylePropsType>`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 30px;
  background-color: ${(props) =>
    `rgba(255, 255, 255, ${props.backgroundTransparency})`};
  color: ${(props) => (props.filter > 50 ? COLORS.TEXT : COLORS.WHITE)};
  box-shadow: ${(props) =>
    `rgb(0, 0, 0 / ${props.boxShadow}) 0px 0px 20px 6px`};
  z-index: 100;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
`;

const Logo = styled.a<HeaderStylePropsType>`
  width: 154.5px;
  height: inherit;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(props) => `invert(${props.filter}%)`};
  }
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  li {
    margin: 0 25px;
  }
  li:nth-child(3) {
    margin-right: -1px;
    &:after {
      content: '|';
      margin-left: 26px;
    }
  }
`;

export default React.memo(Header);
