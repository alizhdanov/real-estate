import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const AboutWrapper = styled.div`
  display: flex;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr 4fr 6fr 1fr;
    grid-column-gap: 30px;
  }

  img {
    display: block;
    width: 100%;
    height: auto;

    @supports (display: grid) {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }

  p {
    margin: 0 0 0 27px;
    font-size: 15px;
    line-height: 24px;

    @supports (display: grid) {
      grid-column-start: 3;
      grid-column-end: 4;
    }
  }
`;

const AboutUs = props => (
  <Section id={props.id} header="О нас">
    <AboutWrapper>
      <img src="/static/img/avatar.jpg" alt="" />
      <p>
        Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда
        приемлемые модификации, например, юмористические вставки или слова,
        которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum
        для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки,
        скрытой в середине абзаца. Также все другие известные генераторы Lorem
        Ipsum используют один и тот же текст, который они просто повторяют, пока
        не достигнут нужный объём. Это делает предлагаемый здесь генератор
        единственным настоящим Lorem Ipsum генератором.{' '}
      </p>
    </AboutWrapper>
  </Section>
);

export default AboutUs;
