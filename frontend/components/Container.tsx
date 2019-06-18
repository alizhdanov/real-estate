import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1em;
`;

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Container;
