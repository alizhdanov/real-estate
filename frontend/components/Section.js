import React from 'react';
import styled from 'styled-components';
import * as vars from '../styles/Variables';
import Container from './Container';

const StyledSection = styled.section`
  padding: 95px 0 70px;
  background-color: ${props => props.theme.bg};
`;

const Header = styled.h3`
  font-size: 40px;
  margin: 0 0 1em;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.07em;

  span {
    position: relative;
    padding: 24px 15px 0 10px;
    border-bottom: ${vars.borderWidth} solid ${vars.brandColor};
    border-left: ${vars.borderWidth} solid ${vars.brandColor};

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: ${vars.borderWidth};
      width: 66px;
      background-color: ${vars.brandColor};
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 66px;
      height: 27px;
      width: ${vars.borderWidth};
      background-color: ${vars.brandColor};
    }
  }
`;

const Section = props => (
  <StyledSection id={props.id} theme={props.theme}>
    <Container>
      <Header>
        <span>{props.header}</span>
      </Header>
      {props.children}
    </Container>
  </StyledSection>
);

Section.defaultProps = {
  theme: {
    bg: '#fff',
  },
};

export default Section;
