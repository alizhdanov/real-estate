import React from 'react'
import styled, {css} from 'styled-components'
import * as vars from '../styles/Variables'
import Container from './Container'

import phone from './assets/icons/phone.svg'
import envelope from './assets/icons/envelope.svg'
import FB from './assets/icons/fb.svg'
import VK from './assets/icons/vk.svg'

const Icon = css`
    width: 1em;
    height: 1em;
    fill: #fff;
    margin-bottom: -0.15em;
    margin-right: 0.1em;
`
const PhoneIcon = styled(phone)`${Icon}`
const EnvelopeIcon = styled(envelope)`${Icon}`

// TODO: move socials to a separate folder
const StyledLink = styled.a`
    text-decoration: none;
    margin: 0 10px;
    cursor: pointer;
`

const Socias = css`
    width: 26px;
    height: 26px;
    fill: #fefefe;
`
const FBIcon = styled(FB)`${Socias}`
const VKIcon = styled(VK)`${Socias}`

const Wrapper = styled.footer`
    padding: 40px 0;
    background-color: #2e2e2e;
    color: #fff;
`

const Inner = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 5fr 2fr;
    grid-column-gap: 30px;
    align-items: end;
`

const Phone = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
`

const Email = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
`

const Socials = styled.div`
    grid-column-start: 4;
    grid-column-end: 5;
`
// TODO: move header to a separate component
const Header = styled.h3`
    font-size: 24px;
    font-weight: 300;

    span {
        border-bottom: 2px solid ${vars.brandColor};
    }
`

const Footer = () => (
    <Wrapper>
        <Container>
            <Inner>
                <Phone>
                    <Header><span>Контакты</span></Header>
                    <div><PhoneIcon /> +38 (063) 363-33-33</div>
                </Phone>
                <Email>
                    <div><EnvelopeIcon /> arendahatlala@gmail.com</div>
                </Email>
                <Socials>
                    <StyledLink href="https://vk.com">
                        <VKIcon />
                    </StyledLink>
                    <StyledLink href="https://facebook.com">
                        <FBIcon />
                    </StyledLink>
                </Socials>
            </Inner>
        </Container>
    </Wrapper>
)

export default Footer