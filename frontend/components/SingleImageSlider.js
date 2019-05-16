import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import NukaSlider from 'nuka-carousel'
import sliderArrows from './sliders/sliderArrows'

class SingleImageSlider extends Component {
    render() {
        return (
            <NukaSlider 
                className={this.props.className} 
                ref={this.props.sliderRef} 
                decorators={sliderArrows} 
                afterSlide={this.props.afterSlide}>
                <img src="/static/img/slider-1.jpg" alt=""/>
                <img src="/static/img/slider-2.jpg" alt=""/>
                <img src="/static/img/slider-3.jpg" alt=""/>
                <img src="/static/img/slider-4.jpg" alt=""/>
                <img src="/static/img/slider-5.jpg" alt=""/>
                <img src="/static/img/slider-6.jpg" alt=""/>
                <img src="/static/img/slider-7.jpg" alt=""/>
            </NukaSlider>
        )
    }
}

export default SingleImageSlider