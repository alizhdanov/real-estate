import React, {Component} from 'react'
import NukaCarousel from 'nuka-carousel'
import sliderArrows from './sliders/sliderArrows'

class PreviewImageSlider extends Component {
    render() {
        return (
            <NukaCarousel 
                ref={this.props.sliderRef} 
                slidesToShow={4} 
                cellSpacing={20} 
                decorators={sliderArrows}
                afterSlide={this.props.afterSlide}>
                <img src="/static/img/slider-1.jpg" alt="" onClick={() => this.props.onSlideClick(0)}/>
                <img src="/static/img/slider-2.jpg" alt="" onClick={() => this.props.onSlideClick(1)}/>
                <img src="/static/img/slider-3.jpg" alt="" onClick={() => this.props.onSlideClick(2)}/>
                <img src="/static/img/slider-4.jpg" alt="" onClick={() => this.props.onSlideClick(3)}/>
                <img src="/static/img/slider-5.jpg" alt="" onClick={() => this.props.onSlideClick(4)}/>
                <img src="/static/img/slider-6.jpg" alt="" onClick={() => this.props.onSlideClick(5)}/>
                <img src="/static/img/slider-7.jpg" alt="" onClick={() => this.props.onSlideClick(6)}/>
            </NukaCarousel>
        )
    }
}

export default PreviewImageSlider