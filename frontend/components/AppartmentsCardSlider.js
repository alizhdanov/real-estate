import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import * as vars from '../styles/Variables'
import Slider from 'react-slick'
import LeftIcon from './assets/icons/angle-left.svg'
import RightIcon from './assets/icons/angle-right.svg'
import PureButton from './PureButton'

const SVG = css`
    width: 40px;
    height: 40px;
    fill: #fff;
`

const LIcon = styled(LeftIcon)`${SVG}`
const RIcon = styled(RightIcon)`${SVG}`

const StyledSLider = styled(Slider)`
    margin-bottom: 2em;

    .slick-dots {
        margin-top: 0.4em;
        position: absolute;
        bottom: -18px;
        display: flex !important;

        li {
            width: auto;
            height: auto;
            flex: 1;

            &:first-child {
                margin-left: 0;
            }

            &:last-child {
                margin-right: 0;
            }

            button {
                width: 100%;
                height: 10px;
                padding: 0;

                &::before {
                    content: '';
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 2px;
                    bottom: auto;
                    width: auto;
                    background-color: ${vars.brandColor};
                    transition: height 0.2s ease-in-out;
                }
            }

            &.slick-active button::before {
                height: 4px;
                transition: height 0.2s ease-in-out;
            }
        }
    }

    .slick-next,
    .slick-prev {
        z-index: 1;
        width: auto;
        height: auto;
        bottom: 0;
        top: 0;
        transform: none;

        &::before {
            display: none;
        }
    }

    .slick-next {
        right: 0;
    }

    .slick-prev {
        left: 0;
    }
`

const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
`

const ArrowRight = (props) => (
    <PureButton {...props}>
        <RIcon />
    </PureButton>
)

const ArrowLeft = (props) => (
    <PureButton {...props}>
        <LIcon />
    </PureButton>
)

class CardSlider extends React.Component {
    state = {
        currentSlide: 0,
        slides: [
            '/static/img/apartment-1-photo.jpg',
            '/static/img/apartment-1-photo.jpg',
            '/static/img/apartment-1-photo.jpg',
            '/static/img/apartment-1-photo.jpg',
            '/static/img/apartment-1-photo.jpg',
            '/static/img/apartment-1-photo.jpg'
        ]
    }

    changeActiveSlide = (index) => {
        this.setState({
            currentSlide: index
        })
    }

    render () {
      var settings = {
        dots:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />
      };
      return (
        <StyledSLider {...settings} className={this.props.className} afterChange={this.changeActiveSlide}>
            {this.state.slides.map((slide, index) =>
                <div key={index}><Image src={slide} alt=""/></div>
            )}
        </StyledSLider>
      );
    }
  }

export default CardSlider