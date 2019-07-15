import styled from 'styled-components'
import PureInput from './PureInput'

const StyledInput = styled(PureInput)`
    padding: 0 11px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: #f2f2f2;
    box-shadow: 
        0px 1px 3px 0px rgba(119, 119, 119, 0.25), 
        0px 2px 12px 0px rgba(119, 119, 119, 0.12);
        
    &.error {
        box-shadow: 
            0px 1px 3px 0px red, 
            0px 2px 12px 0px red;
    }

    &::placeholder {
        color: #b7b7b7;
    }
`

const ContactInput = (props) => {
    let className = props.className
    if (props.error && props.error.error) {
        className += ' error'        
    }

    return (
      <StyledInput {...props} className={className} />

    )
}

export default ContactInput