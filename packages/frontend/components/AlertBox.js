import styled, {ThemeProvider} from 'styled-components'
import theme from 'styled-theming'

const alertColor = theme('type', {
    primary: '#004085',
    success:  '#155724',
    danger: '#721c24',
    warning: '#856404'
})

const alertBackgroundColor = theme('type', {
    primary: '#cce5ff',
    success:  '#d4edda',
    danger: '#f8d7da',
    warning: '#fff3cd'
})

const alertBorderColor = theme('type', {
    primary: '#b8daff',
    success:  '#c3e6cb',
    danger: '#f5c6cb',
    warning: '#ffeeba'
})

const Wrap = styled.div`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    color: ${alertColor};
    background-color: ${alertBackgroundColor};
    border: 1px solid ${alertBorderColor};
    border-radius: 0.25rem;
`

const AlertBox = (props) => (
    <ThemeProvider theme={{ type: props.type }}>
        <Wrap className={props.className}>
            {props.children}
        </Wrap>
    </ThemeProvider>
)

AlertBox.defaultProps = {
    type: 'success'
}

export default AlertBox