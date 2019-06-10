import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';

import Section from './Section';
import AppartmentCard from './AppartmentCard';

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

class Appartments extends Component {
  state = {
    appartments: null,
  };

  // TODO: make a server side rendering
  loadAppartments = async () => {
    const request = await fetch('/api/appartements');
    const appartments = await request.json();
    this.setState({
      appartments,
    });
  };

  componentDidMount() {
    // this.loadAppartments();
  }

  render() {
    const theme = {
      bg: '#ededed',
    };

    return (
      <ThemeProvider theme={theme}>
        <Section id={this.props.id} header="Наши предложения" theme={theme}>
          <CardWrapper>
            {this.state.appartments &&
              this.state.appartments.map(appartment => (
                <StyledAppartmentCard key={appartment.id} data={appartment} />
              ))}
          </CardWrapper>
        </Section>
      </ThemeProvider>
    );
  }
}

export default Appartments;
