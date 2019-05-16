import React, { Component } from 'react'
import styled from 'styled-components'
import NukaCarousel from 'nuka-carousel'
import SingleImageSlider from './SingleImageSlider'
import PreviewImageSlider from './PreviewImageSlider'

const StyledSingleImageSlider = styled(SingleImageSlider)`
    margin-bottom: 1em;
`

class SliderWithPreview extends Component {
    state = {
        slideIndex: 0
    }

    mixins = [NukaCarousel.ControllerMixin]

    onSliderChange = (a, b) => {
        console.log(a, b)
    }

    goToSlide = (index) => {
        if (index > 3) {
            index = 3
        } else {
            index - 1 >= 0 ? index = index - 1 : 0
        }
        this.sliderPreview.goToSlide(index)
    }

    afterMainSliderCahnge = (index) => {
        this.goToSlide(index)
        this.setState({
            slideIndex: index
        })
    }

    afterPreviewSliderChange = (index) => {
        this.sliderMain.goToSlide(index)
        this.goToSlide(index)
        this.setState({
            slideIndex: index
        })
    }

    afterPreviewSliderArrowClick = (index) => {
        console.log('click clack')
        this.sliderMain.goToSlide(index)
        this.setState({
            slideIndex: index
        })
    }

    componentDidMount() {       
        setTimeout(() => {
            this.sliderMain.setDimensions()
            this.sliderPreview.setDimensions()
        }, 200)
    }

    render() {
        return (
            <React.Fragment>
                <StyledSingleImageSlider 
                        sliderRef={slider => this.sliderMain = slider} 
                        afterSlide={this.afterMainSliderCahnge} />
                <PreviewImageSlider 
                    sliderRef={slider => this.sliderPreview = slider}
                    onSlideClick={this.afterPreviewSliderChange}
                    afterSlide={this.afterPreviewSliderArrowClick} />
            </React.Fragment>
        )
    }
}

export default SliderWithPreview