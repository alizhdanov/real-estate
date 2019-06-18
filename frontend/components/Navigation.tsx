import React from 'react';
import styled, { css } from 'styled-components';

import FB from './assets/icons/fb.svg';
import VK from './assets/icons/vk.svg';

const Wrap = styled.nav`
  display: flex;
  align-items: center;
`;

const SVG = css`
  width: 26px;
  height: 26px;
  fill: #fefefe;
`;

const FBIcon = styled(FB)`
  ${SVG}
`;
const VKIcon = styled(VK)`
  ${SVG}
`;

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  color: #fefefe;
`;

const smoothScroll = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  // @ts-ignore
  const url = new URL(e.target.href);
  const node = document.getElementById(url.hash.slice(1));
  if (node) {
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
};

const Nav = () => (
  <Wrap>
    <StyledLink href="/#apartments" onClick={smoothScroll}>
      Наши Предложения
    </StyledLink>
    <StyledLink href="/#apartments" onClick={smoothScroll}>
      Обратная связь
    </StyledLink>
    <StyledLink href="/#apartments" onClick={smoothScroll}>
      Контакты
    </StyledLink>
    <StyledLink href="https://vk.com">
      <VKIcon />
    </StyledLink>
    <StyledLink href="https://facebook.com">
      <FBIcon />
    </StyledLink>
  </Wrap>
);

export default Nav;
