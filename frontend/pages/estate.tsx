import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../components/MyLayout';
import Container from '../components/Container';
import SliderWithPreview from '../components/SliderWithPreview';

const HeaderPlug = styled.div`
  height: 58px;
`;

const Wrap = styled.div`
  max-width: 100%;
  margin: 70px 0 100px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
`;

const TextWrap = styled.div`
  grid-column: span 5;
`;

const SliderWrap = styled.div`
  grid-column: span 7;
`;

const Heading = styled.h2`
  font-size: 30px;
  font-weight: 300;
  margin-top: 0;
`;

const Table = styled.table`
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid rgba(7, 12, 15, 0.11);

    td:last-child {
      font-weight: 700;
    }
  }

  td {
    padding-top: 1em;
    padding-bottom: 0.25em;
  }
`;

export default class extends Component {
  // @ts-ignore
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    return (
      <Layout>
        <Container>
          <HeaderPlug />
          <Wrap>
            <TextWrap>
              <Heading>Super Awesome Flat</Heading>
              <Table>
                <tbody>
                  <tr>
                    <td>Цена:</td>
                    <td>2 500 грн./сутки</td>
                  </tr>
                  <tr>
                    <td>Адрес:</td>
                    <td>Одесса, ул.Клевая, 77</td>
                  </tr>
                  <tr>
                    <td>Площадь:</td>
                    <td>40 м2</td>
                  </tr>
                  <tr>
                    <td>Кол-во комнат:</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Этаж:</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </Table>
            </TextWrap>
            {/* <SliderWrap>
              <SliderWithPreview />
            </SliderWrap> */}
          </Wrap>
        </Container>
      </Layout>
    );
  }
}
