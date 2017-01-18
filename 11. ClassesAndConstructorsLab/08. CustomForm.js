let result = (function() {
    class TextBox {
        constructor(selector, regex) {
            this.selector = selector;
            this._elements = $(selector);
            this._invalidSymbols = regex;

            let that = this;
            $(selector).on('input change', function() {
                that.value = $(this).val();
            });
        }

        get value() {
            return $(this.selector).val();
        }

        set value(newValue) {
            $(this.selector).val(newValue);
        }

        isValid() {
            return !this._invalidSymbols.test($(this.selector).val());
        }

        get elements() {
            return this._elements;
        }
    }

    class Form {
        constructor(...textboxes) {
            this._element = $('<div>').addClass('form');
            this._textboxes = [];

            for (let textbox of textboxes) {
                if(textbox instanceof TextBox) {
                    this._textboxes.push(textbox);
                    $(this._element).append($(textbox.selector));
                } else {
                    throw new Error;
                }
            }
        }

        submit() {
            let allTrue = true;

            for (let textbox of this._textboxes) {
                if (textbox.isValid() == true) {
                    $(textbox.selector).css('border', '2px solid green');
                } else {
                    $(textbox.selector).css('border', '2px solid red');
                    allTrue = false;
                }
            }

            return allTrue;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {Textbox: TextBox, Form: Form};
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox('#username', /[^a-zA-Z0-9]/);
let password = new Textbox('#password', /[^a-zA-Z]/);
username.value = 'username';
password.value = 'password2';
let form = new Form(username, password);
form.attach('#root');
form.submit();
console.log(username.isValid());
console.log(password.isValid());
