class FormValidator {
    validate = (inputs) => {
        return new Promise((resolve, reject) => {
            const errors = {};
            inputs.forEach((input) => {
                if (this.isEmpty(input.value)) {
                    return errors[input.name] = {error: true, message: 'Обязательное поле'}
                }

                if (!this.validateInput(input.type, input.value)) {
                    return errors[input.name] = {error: true, message: 'Неправильно заполненое поле'}
                }
            })
            if(Object.keys(errors).length) {
                return reject(errors)
            }
            resolve()
        })
    }

    isEmpty (val) {
        return !val.length
    }

    validateInput (inputType, inputValue) {
        switch(inputType) {
            case 'text':
                return this.validateTextInput(inputValue);
                break;
            case 'email':
                return this.validateEmailInput(inputValue);
                break;
            case 'tel':
                return this.validateTelInput(inputValue);
                break;
            case 'textarea':
                return this.validateTextarea(inputValue);
                break;
        }
    }

    validateTextInput (value) {
        return true
    }

    validateEmailInput (value) {
        const regex = new RegExp(/\S+@\S+\.\S{2,}/, 'i')
        return regex.test(value)
    }

    validateTelInput (value) {
        return true
    }

    validateTextarea (value) {
        return true
    }
}

export default FormValidator