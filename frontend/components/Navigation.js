import React from 'react'
import styled, {css} from 'styled-components'

import Link from 'next/link'

import FB from './assets/icons/fb.svg'
import VK from './assets/icons/vk.svg'

const Wrap = styled.nav`
    display: flex;
    align-items: center;
`

const SVG = css`
    width: 26px;
    height: 26px;
    fill: #fefefe;
`

const FBIcon = styled(FB)`${SVG}`
const VKIcon = styled(VK)`${SVG}`

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  color: #fefefe;
`

const smoothScroll = (e) => {
    e.preventDefault()
    const url = new URL(e.target.href)
    const node = document.getElementById(url.hash.slice(1))
    if (node) {
        node.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
            inline: 'start'
        })
    }
}

const Nav = () => (
    <Wrap>
        <StyledLink href="/#about-us" onClick={smoothScroll}>
            О Нас
        </StyledLink>
        <StyledLink href="/#apartments" onClick={smoothScroll}>
            Предложения
        </StyledLink>
        <StyledLink href="https://vk.com">
            <VKIcon />
        </StyledLink>
        <StyledLink href="https://facebook.com">
            <FBIcon />
        </StyledLink>
    </Wrap>
)

export default Nav