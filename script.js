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

  validate(input) {
    const errorElement = input.nextElementSibling;
    if (input.validity.valid) {
      errorElement.textContent = '';
      errorElement.className = 'error';
      return true;
    }
    if (input.validity.patternMismatch) {
      // error
    }
    errorElement.className = 'error active';
    return false;
  }

  addValidation() {
    Object.keys(this.inputs).forEach((input) => {
      input.addEventListener('input', validate(input));
    });
  }
}
