import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Query } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Section from './Section';
import AppartmentCard from './AppartmentCard';

const GET_DOGS = gql`
  {
    estates {
      id
      title
      type
    }
  }
`;

// TODO: if we use 1fr 1fr it fucked up everything
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  max-width: 100%;
`;

const StyledAppartmentCard = styled(AppartmentCard)`
  flex: 1 0 50%;

  @supports (display: grid) {
    grid-column: span 6;
  }
`;

const Appartments = ({ id }) => {
  const { data } = useQuery(GET_DOGS);
  const theme = {
    bg: '#ededed',
  };

  console.log(data.estates);

  return (
    <ThemeProvider theme={theme}>
      <Section id={id} header="Наши предложения" theme={theme}>
        <CardWrapper>
          {data &&
            data.estates &&
            data.estates.map(appartment => (
              <StyledAppartmentCard key={appartment.id} data={appartment} />
            ))}
        </CardWrapper>
      </Section>
    </ThemeProvider>
  );
};

export default Appartments;
