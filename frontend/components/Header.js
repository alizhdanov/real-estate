import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Container from './Container'
import Nav from './Navigation'
import CallBack from './CallBack'
import Language from './ChangeLanguage'
import CallBackModal from './CallbackModal'


const Wrapper = styled.header`
  background-color: rgba(0,0,0, 0.78);
  color: #fefefe;
`

const Logo = styled.img`
  display: inline-block;
  width: 55px;
  height: auto;
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 58px;
`

const Navigation = styled.div`
  display: flex;
  align-items: center;
`

const ChangeLanguage = styled(Language)`
  margin-left: 1em;
`

class Header extends React.Component {

    state = {
        language: 'ru'
    }

  changeLanguage = () => {
      this.setState(prevState => ({
          language: prevState.language === 'ru' ? 'en' : 'ru'
      }));
  }

  render() {
    return (
        <Wrapper className={this.props.className}>
          <Container>
            <FlexWrapper>

              <Link href="/">
                <Logo src="/static/img/logo.png" alt="Real estate agency logo"/>
              </Link>
              <Navigation>
                <Nav />
                <CallBack />
                <ChangeLanguage language={this.state.language} changeLanguage={this.changeLanguage} />
              </Navigation>
            </FlexWrapper>
          </Container>

          <CallBackModal isOpen={false} />

        </Wrapper>
    )
  }
}

export default Header