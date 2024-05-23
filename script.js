class Validator {
  constructor(form) {
    this.form = document.querySelector(form);
    this.emailInput = form.querySelector('input[type="email"]');
    this.zipCodeInput = form.querySelector('input[name="zip"]');
    this.pwdInput = form.querySelector('input[name="password"]');
    this.pwdConfirmationInput = form.querySelector(
      'input[name="password-confirmation"]'
    );
    this.submitButton = form.querySelector('button');
  }
}
