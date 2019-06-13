import React, { Component } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-images';
import MainSlider from './sliders/MainSlider';
import PreviewSlider from './sliders/PreviewSlider';

class SLiderWithPreviews extends Component {
  state = {
    activeSlide: 0,
    lightboxIsOpen: false,
    currentImage: 0,
    slides: [
      '/static/img/slider-1.jpg',
      '/static/img/slider-2.jpg',
      '/static/img/slider-3.jpg',
      '/static/img/slider-4.jpg',
      '/static/img/slider-5.jpg',
      '/static/img/slider-6.jpg',
      '/static/img/slider-7.jpg',
      '/static/img/slider-8.jpg',
    ],
    slides2: [
      { src: '/static/img/slider-1.jpg' },
      { src: '/static/img/slider-2.jpg' },
      { src: '/static/img/slider-3.jpg' },
      { src: '/static/img/slider-4.jpg' },
      { src: '/static/img/slider-5.jpg' },
      { src: '/static/img/slider-6.jpg' },
      { src: '/static/img/slider-7.jpg' },
      { src: '/static/img/slider-8.jpg' },
    ],
  };

  afterMainSliderChange = (oldIndex, newIndex) => {
    this.goToSlide(newIndex);
  };

  onPreviewSliderChanged = (prev, next) => {
    console.log(next, prev);
    this.sliderMain.innerSlider.slickGoTo(next);
  };

  onPreviewClick = index => {
    this.sliderMain.innerSlider.slickGoTo(index);
    this.goToSlide(index);
  };

  goToSlide = index => {
    const slidesAmount = this.state.slides.length;
    const lastIndex = slidesAmount - 4;
    if (index > lastIndex) {
      index = lastIndex;
    } else {
      index - 1 >= 0 ? (index = index - 1) : 0;
    }

    this.sliderPreview.innerSlider.slickGoTo(index);
  };

  setCurrentSlide = index => {
    this.setState({
      activeSlide: index,
    });
  };

  closeLightbox = () =>
    this.setState({
      lightboxIsOpen: false,
    });

  gotoPrevious = () => {
    this.setState(prevState => ({
      currentImage: prevState.currentImage - 1,
    }));
  };
  gotoNext = () => {
    this.setState(prevState => ({
      currentImage: prevState.currentImage + 1,
    }));
  };

  render() {
    return (
      <div>
        <MainSlider
          slides={this.state.slides}
          sliderRef={slider => (this.sliderMain = slider)}
          beforeChange={this.afterMainSliderChange}
        />

        <PreviewSlider
          slides={this.state.slides}
          sliderRef={slider => (this.sliderPreview = slider)}
          onClickChange={this.onPreviewClick}
        />

        <Lightbox
          images={this.state.slides2}
          showThumbnails={true}
          isOpen={this.state.lightboxIsOpen}
          currentImage={this.state.currentImage}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}

export default SLiderWithPreviews;
