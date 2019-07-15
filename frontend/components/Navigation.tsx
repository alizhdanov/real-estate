import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
// @ts-ignore
import FB from './assets/icons/fb.svg';
// @ts-ignore
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

const Nav = () => {
  const router = useRouter();

  const smoothScroll = useCallback(
    (e: React.SyntheticEvent<HTMLAnchorElement>) => {
      if (router.pathname !== '/') {
        return;
      }

      e.preventDefault();
      const url = new URL(e.currentTarget.href);
      const node = document.getElementById(url.hash.slice(1));
      if (node) {
        node.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
      }
    },
    [router]
  );

  return (
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
      <StyledLink href="https://vk.com" target="_blank">
        <VKIcon />
      </StyledLink>
      <StyledLink href="https://facebook.com" target="_blank">
        <FBIcon />
      </StyledLink>
    </Wrap>
  );
};

export default Nav;
