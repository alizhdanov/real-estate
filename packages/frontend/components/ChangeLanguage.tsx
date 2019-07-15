import React, { useState } from 'react';
import styled from 'styled-components';
import PureButton from './PureButton';

const Wrapper = styled(PureButton)`
  display: inline-block;
  width: 20px;
  cursor: pointer;
`;

const LanguageItem = styled.div`
  &.active {
    background-color: #fff;
    color: #000;
  }
`;

type Props = {
  className?: string;
};

const ChangeLanguage = ({ className }: Props) => {
  const [language, handleLanguageChange] = useState('ru');

  return (
    <Wrapper
      className={className}
      onClick={() => handleLanguageChange(language === 'ru' ? 'en' : 'ru')}
    >
      <LanguageItem className={language === 'ru' ? 'active' : ''}>
        RU
      </LanguageItem>
      <LanguageItem className={language === 'en' ? 'active' : ''}>
        EN
      </LanguageItem>
    </Wrapper>
  );
};

export default ChangeLanguage;
