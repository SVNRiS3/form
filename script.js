class Validator {
  constructor(form) {
    this.form = document.querySelector(form);
    this.inputs = {
      emailInput: form.querySelector('input[type="email"]'),
      zipCodeInput: form.querySelector('input[name="zip"]'),
      pwdInput: form.querySelector('input[name="password"]'),
      pwdConfirmationInput: form.querySelector(
        'input[name="password-confirmation"]'
      ),
    };
    this.submitButton = form.querySelector('button');
  }

  validate() {}
}
