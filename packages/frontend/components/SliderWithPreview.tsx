import React, { Component } from 'react';
// import styled from 'styled-components';
import Lightbox from 'react-images';
import MainSlider from './sliders/MainSlider';
import PreviewSlider from './sliders/PreviewSlider';

type Props = {
  data: any;
};

type State = {
  activeSlide: number;
  lightboxIsOpen: boolean;
  currentImage: number;
  slides: string[];
  slides2: string[];
};

class SLiderWithPreviews extends Component<Props, State> {
  sliderMain: any;
  sliderPreview: any;

  state = {
    activeSlide: 0,
    lightboxIsOpen: false,
    currentImage: 0,
    slides: this.props.data.estate.medias.map(i => i.url),
    slides2: this.props.data.estate.medias.map(i => i.url),
  };

  afterMainSliderChange = (_oldIndex: number, newIndex: number) => {
    this.goToSlide(newIndex);
  };

  onPreviewSliderChanged = (prev: number, next: number) => {
    console.log(next, prev);
    this.sliderMain.innerSlider.slickGoTo(next);
  };

  onPreviewClick = (index: number) => {
    this.sliderMain.innerSlider.slickGoTo(index);
    this.goToSlide(index);
  };

  goToSlide = (index: number) => {
    const slidesAmount = this.state.slides.length;
    const lastIndex = slidesAmount - 4;
    if (index > lastIndex) {
      index = lastIndex;
    } else {
      index - 1 >= 0 ? (index = index - 1) : 0;
    }

    this.sliderPreview.innerSlider.slickGoTo(index);
  };

  setCurrentSlide = (index: number) => {
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
