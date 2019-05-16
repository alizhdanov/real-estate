import  FormValidator from './FormValidator'

describe('FormValidator', () => {
    let constructor
    beforeEach(() => {
        constructor = new FormValidator()
    })

    test('isEmpty should work properly', () => {
        const emptyResult = constructor.isEmpty('')
        const notEmptyResult = constructor.isEmpty('Some test')
        expect(emptyResult).toBe(true)
        expect(notEmptyResult).toBe(false)
    })

    describe('validateInput should return proper method', () => {
        beforeEach(() => {
            spyOn(constructor, 'validateTextInput')
            spyOn(constructor, 'validateEmailInput')
            spyOn(constructor, 'validateTelInput')
            spyOn(constructor, 'validateTextarea')
        })

        test('type text', () => {
            const input = document.createElement('input');
            const {type, value} = input;
            constructor.validateInput(type, value);
            expect(constructor.validateTextInput).toBeCalled();
        })

        test('type email', () => {
            const input = document.createElement('input');
            input.type = 'email';
            const {type, value} = input;
            constructor.validateInput(type, value);
            expect(constructor.validateEmailInput).toBeCalled();
        })

        test('type tel', () => {
            const input = document.createElement('input');
            input.type = 'tel';
            const {type, value} = input;
            constructor.validateInput(type, value);
            expect(constructor.validateTelInput).toBeCalled();
        })

        test('type textarea', () => {
            const input = document.createElement('textarea');
            const {type, value} = input;
            constructor.validateInput(type, value);
            expect(constructor.validateTextarea).toBeCalled();
        })
    })

    test('Should validate email', () => {
        const truthyResult1 = constructor.validateEmailInput('hello@gmail.com');
        const truthyResult2 = constructor.validateEmailInput('h@g.com');
        const truthyResult3 = constructor.validateEmailInput('hello.you@gmail.com');

        const falsyResult1 = constructor.validateEmailInput('hello');
        const falsyResult2 = constructor.validateEmailInput('hello@gmail');
        const falsyResult3 = constructor.validateEmailInput('hello@gmail.c');

        expect(truthyResult1).toBe(true);
        expect(truthyResult2).toBe(true);
        expect(truthyResult3).toBe(true);

        expect(falsyResult1).toBe(false);
        expect(falsyResult2).toBe(false);
        expect(falsyResult3).toBe(false);
    })
})