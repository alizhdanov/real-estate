import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Section from './Section';
import AppartmentCard from './AppartmentCard';
import { ApartmentsQueryQuery } from '../generated/graphql';

const GET_DOGS = gql`
  query ApartmentsQuery {
    estates(limit: 6) {
      id
      ...AppartmentCard_data
    }
  }
  ${AppartmentCard.fragments.data}
`;

console.log(GET_DOGS);

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
    grid-column: span 4;
  }
`;

type Props = {
  id: string;
};

const Appartments = ({ id }: Props) => {
  const { data } = useQuery<ApartmentsQueryQuery>(GET_DOGS);
  const theme = {
    bg: '#ededed',
  };

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
