import React from 'react'
import styled from 'styled-components'
import PureButton from './PureButton'

const Wrapper = styled(PureButton)`
  display: inline-block;
  width: 20px;
  cursor: pointer;
`

const LanguageItem = styled.div`
    &.active {
      background-color:#fff;
      color:#000;
    }
`

const ChangeLanguage = (props) => (
    <Wrapper className={props.className} onClick={props.changeLanguage}>
        <LanguageItem className={props.language === 'ru' ? 'active' : ''}>RU</LanguageItem>
        <LanguageItem className={props.language === 'en' ? 'active' : ''}>EN</LanguageItem>
    </Wrapper>
)

export default ChangeLanguage