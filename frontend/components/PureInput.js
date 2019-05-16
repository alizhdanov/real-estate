import styled from 'styled-components'

// TODO: add dynamic component
const StyledInput = styled.input`
    margin: 0;
    outline: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); // wtf ???
    text-align: left;
    background: none;
    border: 0;
    color: #000;
    border-radius: 0;
    box-shadow: none;
    appearance: none;
    box-sizing: border-box;
    resize: none;
`

const StyledTextarea = StyledInput.withComponent('textarea')

// const PureInput = (props) => (
//     <StyledInput
//         className={props.className}
//         placeholder={props.placeholder}
//         type={props.type}
//     />
// )

const PureInput = (props) => {
    if (props.tagName === 'textarea') {
        return <StyledTextarea className={props.className} {...props} />
    }

    return <StyledInput {...props} className={props.className} />
}

PureInput.defaultProps = {
    tagName: 'input'
}

export default PureInput