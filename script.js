class Validator {
  constructor(form) {
    this.form = document.querySelector(form);
    this.inputs = {
      emailInput: this.form.querySelector('input[type="email"]'),
      zipCodeInput: this.form.querySelector('input[name="zip"]'),
      pwdInput: this.form.querySelector('input[name="password"]'),
      pwdConfirmationInput: this.form.querySelector(
        'input[name="password-confirmation"]'
      ),
    };
    this.submitButton = this.form.querySelector('button');
  }

  checkPasswordMatching() {
    return (
      this.inputs.pwdInput.textContent ===
      this.inputs.pwdConfirmationInput.textContent
    );
  }

  validate(input) {
    const errorElement = input.nextElementSibling;
    if (input.validity.valid) {
      errorElement.textContent = '';
      errorElement.className = 'error';
      return true;
    }
    if (input.validity.patternMismatch) {
      errorElement.textContent = 'zip-code not in xx-xx format';
    } else if (input.validity.typeMismatch) {
      errorElement.textContent = 'e-mail address invalid';
    } else if (input.validity.valueMissing) {
      errorElement.textContent = "field can't be empty";
    } else if (!checkPasswordMatching()) {
      errorElement.textContent =
        'maximum password length of 32 symbols exceeded';
    } else if (input.validity.tooLong) {
      errorElement.textContent =
        'maximum password length of 32 symbols exceeded';
    } else if (input.validity.tooShort) {
      errorElement.textContent =
        'minimum password length of 8 symbols not reached';
    }
    errorElement.className = 'error active';
    return false;
  }

  addValidation() {
    Object.values(this.inputs).forEach((input) => {
      input.addEventListener('input', () => this.validate(input));
    });
  }
}

const validator = new Validator('form');
validator.addValidation();
