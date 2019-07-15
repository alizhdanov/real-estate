import styled from 'styled-components'

const Button = styled.button`
    background: none;
    border: none;
    border-radius: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    padding: 0;
`

const PureButton = ({children, className, onClick}) => (
    <Button className={className} onClick={onClick}>
        {children}
    </Button>
)

export default PureButton