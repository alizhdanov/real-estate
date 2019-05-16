import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import {ArrowLeft, ArrowRight} from './arrows'

const Image = styled.img`
    display: inline-block;
    max-width: 100%;
    height: auto;
`

const settings = {
    infinite: false,
    slidesToShow: 4, 
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
}

const PreviewSlider = (props) => (
    <Slider {...settings} ref={props.sliderRef}>
        {props.slides.map((slide, index) => 
            <div key={index} onClick={() => props.onClickChange (index)}>
                <Image src={slide} alt=""/>
            </div>
        )}
    </Slider>
)

export default PreviewSlider