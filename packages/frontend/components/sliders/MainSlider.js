import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from './arrows';
const StyledSlider = styled(Slider)``;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const settings = {
  infinite: false,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
};

const PreviewSlider = props => (
  <StyledSlider
    {...settings}
    ref={props.sliderRef}
    afterChange={props.beforeChange}
  >
    {props.slides.map((slide, index) => (
      <div key={index}>
        <Image src={slide} alt="" />
      </div>
    ))}
  </StyledSlider>
);

export default PreviewSlider;
