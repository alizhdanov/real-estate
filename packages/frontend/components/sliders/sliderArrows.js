import React from 'react'
import styled, {css} from 'styled-components'
import PureButton from '../PureButton'
import LeftIcon from '../assets/icons/angle-left.svg'
import RightIcon from '../assets/icons/angle-right.svg'

const SVG = css`
    width: 40px;
    height: 40px;
    fill: #fff;
`

// TODO: some bugs with importing this stupid icons

const LIcon = styled(LeftIcon)`${SVG}`
const RIcon = styled(RightIcon)`${SVG}`

const Decorators = [
    {
        component: (props) =>  (
            <PureButton
                onClick={props.previousSlide}>
                <LIcon />
            </PureButton>
        ),
        position: 'CenterLeft'
    },
    {
        component: (props) =>  (
            <PureButton
                onClick={props.nextSlide}>
                <RIcon />
            </PureButton>
        ),
        position: 'CenterRight'
    }
];

export default Decorators