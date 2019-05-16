import styled from 'styled-components'

import PureButton from './PureButton'

const Button = styled(PureButton)`
  display: inline-block;
  text-align: right;
  line-height: 1;

  span {
    font-size: 0.85em;
    text-decoration: underline;
  }
`

const CallBack = ({className}) => (
    <Button>
        +38 (063) 363-33-33<br/>
        <span>заказать звонок</span>
    </Button>
)

export default CallBack