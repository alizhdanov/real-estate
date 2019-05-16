import styled from 'styled-components'

const Message = styled.div`
  color: red;
`

const ErrorMessage = ({message, className}) => (
    <Message className={className}>{message}</Message>
)

export default ErrorMessage