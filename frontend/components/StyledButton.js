import styled from 'styled-components'
import PureButton from './PureButton'
import {pxToEm} from '../styles/Mixins'
import * as vars from '../styles/Variables'

// TODO: make theming

const Button =  styled(PureButton)`
    padding: 0 ${pxToEm(22, 18)};
    height: ${pxToEm(40, 18)};
    font-size: 18px;
    background-color: ${vars.brandColor};
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    cursor: pointer;
`;

const StyledButton = (props) => (
    <Button {...props} className={props.className}>{props.children}</Button>
)

export default StyledButton