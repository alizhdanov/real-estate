import React from 'react'
import styled, {css} from 'styled-components'
import LeftIcon from '../assets/icons/angle-left.svg'
import RightIcon from '../assets/icons/angle-right.svg'
import PureButton from '../PureButton'

const SVG = css`
    width: 40px;
    height: 40px;
    fill: #fff;
`

const LIcon = styled(LeftIcon)`${SVG}`
const RIcon = styled(RightIcon)`${SVG}`

const ArrowsSharedStyles = css`
    z-index: 1;
    width: auto;
    height: auto;
    bottom: 0;
    top: 0;
    transform: none;

    &::before {
        display: none;
    }
`

const RightButton = styled(PureButton)`
    &.slick-next {
        ${ArrowsSharedStyles}
        right: 0;
    }
`

const LeftButton = styled(PureButton)`
    &.slick-prev {
        ${ArrowsSharedStyles}
        left: 0;
    }
`

const ArrowRight = (props) => (
    <RightButton {...props}>
        <RIcon />
    </RightButton>
)

const ArrowLeft = (props) => (
    <LeftButton {...props}>
        <LIcon />
    </LeftButton>
)

export {ArrowLeft, ArrowRight}