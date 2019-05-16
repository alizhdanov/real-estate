import React, {Component} from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import ContactInput from './ContactInput'
import StyledButton from './StyledButton'

// ReactModal.setAppElement('#__next')
// TODO: we should just add styling class
ReactModal.defaultStyles.content.top = 100
ReactModal.defaultStyles.content.maxWidth = 400
ReactModal.defaultStyles.content.width = '100%'
ReactModal.defaultStyles.content.left = '50%'
ReactModal.defaultStyles.content.right = 'auto'
ReactModal.defaultStyles.content.bottom = 'auto'
ReactModal.defaultStyles.content.transform = 'translateX(-50%)'
ReactModal.defaultStyles.content.padding = '45px 30px'

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.8)'

const CallbackForm = styled.form`
    display: flex;
    flex-direction: column;
`

const StyledInput = styled(ContactInput)`
    margin-bottom: 1.5em;
`

const StyledTextArea = styled(ContactInput).attrs({
    tagName: 'textarea'
})`
    min-height: 180px
`

const SubmitButton = styled(StyledButton)`
    display: inline-block;
    margin-top: 40px;
    margin-left: auto;
`

const defaultInputs = () => {
    return {
        name: '',
        phone: '',
        message: '',
    }
}

const defaultErrors = () => {
    return {
        name: {
            error: false,
            message: ''
        },
        email: {
            error: false,
            message: ''
        },
        message: {
            error: false,
            message: ''
        },
    }
}

class CallbackModal extends Component {
    state = {
        inputs: defaultInputs(),
        errors: defaultErrors(),
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
  
        this.setState((prevState, props) => {
          return {inputs: Object.assign(prevState.inputs, {
              [name]: value
          })}
        })
      }

    render () {
        const {name, phone, message} = this.state.inputs

        return (
            <ReactModal isOpen={this.props.isOpen}>
                <CallbackForm>
                    <StyledInput name="name"
                                 value={name}
                                 onChange={this.handleInputChange}
                                 error={this.state.errors.name}
                                 placeholder="Имя"
                                 required
                                 minlength="2" />
                    <StyledInput  name="email"
                                value={phone}
                                onChange={this.handleInputChange}
                                error={this.state.errors.phone}
                                placeholder="Номер телефона"
                                required/>
                    <StyledTextArea 
                        name="message"
                        value={message}
                        placeholder="Ваше сообщение"
                        minlength="3" 
                        onChange={this.handleInputChange}
                        error={this.state.errors.message}
                        required/>
                    <SubmitButton>Заказать звонок</SubmitButton>
                </CallbackForm>
            </ReactModal>
        )
    }
}

export default CallbackModal