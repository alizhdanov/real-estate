import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1em;
`

const Container = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Container