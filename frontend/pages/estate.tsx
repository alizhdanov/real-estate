import React, { Component } from 'react';
import Estate from '../components/Estate';

type Props = {
  id: string;
};

class EstatePage extends Component<Props> {
  // @ts-ignore
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    return <Estate id={this.props.id} />;
  }
}

export default EstatePage;
