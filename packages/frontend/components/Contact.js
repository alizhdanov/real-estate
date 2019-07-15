import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Section from './Section';
import ContactInput from './ContactInput';
import StyledButton from './StyledButton';
import AlertBox from './AlertBox';
import FormValidator from './utils/FormValidator';
import ErrorMessage from './ErrorMessage';

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 5fr 5fr 1fr;
  grid-column-gap: 30px;
`;

const StyledContactInput = styled(ContactInput)`
  //margin-bottom: 1em;
  @supports (display: grid) {
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledContactTextArea = styled(ContactInput).attrs({
  tagName: 'textarea',
})`
  height: 100%;
  flex: 1;
`;

const ContactWrapper = styled.div`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 1fr;
    grid-column-gap: 30px;
  }
`;

const ContactInputs = styled.div`
  @supports (display: grid) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const ContactsTextArea = styled.div`
  @supports (display: grid) {
    grid-column-start: 3;
    grid-column-end: 4;
  }
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled(StyledButton)`
  margin-left: auto;
  margin-top: 30px;

  @supports (display: grid) {
    grid-column-start: 3;
    grid-column-end: 4;
  }
`;

const StyledAlertBox = styled(AlertBox)`
  @supports (display: grid) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  line-height: 2em;
  min-height: 2em;
`;

const defaultInputs = () => {
  return {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
};

const defaultErrors = () => {
  return {
    name: {
      error: false,
      message: '',
    },
    email: {
      error: false,
      message: '',
    },
    phone: {
      error: false,
      message: '',
    },
    message: {
      error: false,
      message: '',
    },
  };
};

class Contact extends Component {
  state = {
    inputs: defaultInputs(),
    errors: defaultErrors(),
    alertBox: null,
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState((prevState, props) => {
      return {
        inputs: Object.assign(prevState.inputs, {
          [name]: value,
        }),
      };
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    event.persist();

    const inputs = Array.prototype.slice
      .call(event.target.elements)
      .filter(input => input.type !== 'submit');

    this.validateForm
      .validate(inputs)
      .then(() => {
        const form = new FormData(event.target);
        this.resetError();
        return fetch('/api/contact', {
          method: 'POST',
          body: form,
        }).then(res => {
          return res.json();
        });
      })
      .then(res => {
        if (res.valid) {
          this.resetForm();
          this.setState({
            alertBox: true,
          });
        }
      })
      .catch(errors => {
        console.log(errors);
        this.setError(errors);
      });
  };

  validateForm = new FormValidator();

  setError = errorsObject => {
    this.setState({
      errors: Object.assign(defaultErrors(), errorsObject),
    });
  };

  resetError = inputName => {
    this.setState({
      errors: defaultErrors(),
    });
  };

  resetForm = () => {
    this.setState({
      inputs: defaultInputs(),
    });
  };

  render() {
    const { name, email, phone, message } = this.state.inputs;

    return (
      <Section header="Обратная связь">
        <ContactForm onSubmit={this.handleFormSubmit}>
          {this.state.alertBox && (
            <StyledAlertBox>Ваше сообщение отправлено!</StyledAlertBox>
          )}
          <ContactInputs>
            <StyledContactInput
              name="name"
              value={name}
              onChange={this.handleInputChange}
              error={this.state.errors.name}
              placeholder="Имя"
              required
              minlength="2"
            />
            {/* {this.state.errors.name.error && <StyledErrorMessage message={this.state.errors.name.message} />} */}
            <StyledErrorMessage message={this.state.errors.name.message} />
            <StyledContactInput
              name="email"
              value={email}
              onChange={this.handleInputChange}
              error={this.state.errors.email}
              type="email"
              placeholder="Электронная почта"
              required={!phone.length}
            />
            {/* {this.state.errors.email.error && <StyledErrorMessage message={this.state.errors.email.message} />} */}
            <StyledErrorMessage message={this.state.errors.email.message} />
            <StyledContactInput
              name="phone"
              value={phone}
              onChange={this.handleInputChange}
              error={this.state.errors.phone}
              type="tel"
              placeholder="Номер телефона"
              required={!email.length && !!phone.length}
            />
            {/* {this.state.errors.phone.error && <StyledErrorMessage message={this.state.errors.phone.message} />} */}
            <StyledErrorMessage message={this.state.errors.phone.message} />
          </ContactInputs>
          <ContactsTextArea>
            <StyledContactTextArea
              name="message"
              value={message}
              placeholder="Ваше сообщение"
              minlength="3"
              onChange={this.handleInputChange}
              error={this.state.errors.message}
              required
            />
            {/* {this.state.errors.message.error && <StyledErrorMessage message={this.state.errors.message.message} />} */}
            <StyledErrorMessage message={this.state.errors.message.message} />
          </ContactsTextArea>
          <SubmitButton>Отправить</SubmitButton>
        </ContactForm>
      </Section>
    );
  }
}

export default Contact;
