class FormValidator {
  constructor() {
    this.formFields = [];
    this.form = document.getElementById("form");
    this.addFormField("#name", { minLength: 0, maxLength: 1 });
    this.addFormField("#card-number", { minLength: 16, maxLength: 16 });
    this.addFormField("#date-MM", { minLength: 2, maxLength: 2 });
    this.addFormField("#date-YY", { minLength: 2, maxLength: 2 });
    this.addFormField("#cvc", { minLength: 3, maxLength: 3 });
    this.init();
  }

  form = document.querySelector('#form');
  submitView = document.querySelector(".form-submitted-view");

  addFormField = (cssSelector, options) => {
    const formField = new FormField(cssSelector, options);
    this.formFields.push(formField);
  };

  init() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validateForm();
    });
  }

  validateForm = () => {
    const formResults = this.formFields.map((f) => f.validate());
    console.log(formResults);
    if (formResults.includes(false)) {
      console.log("błąd w formularzu");
    } else {
      this.form.classList.add("success");
      this.submitView.classList.add("success");
    }
  };
}
