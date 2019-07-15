import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

export default () => injectGlobal`
  ${styledNormalize}

  html {
    font-size: 14px;
  }
 
  body {
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`