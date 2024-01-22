class FormField {
  constructor(
    formFieldSelector,
    { minLength = 1, maxLength = 50, errorMsgSelector }
  ) {
    this.formField = document.querySelector(formFieldSelector);
    this.id = this.formField.id;
    this.minLength = minLength;
    this.maxLength = maxLength;
    if (!errorMsgSelector) {
      errorMsgSelector = `${formFieldSelector} + span`;
    }
    this.errorMsgEl = document.querySelector(errorMsgSelector);
    this.numReg = /^\d+$/;
    this.nameReg = /^[a-zA-Z]+(?: [A-Za-z]+)$/;
  }

  validate = () => {
    switch (this.id) {
      case "name":
        if (!this.validateName()) {
          return false;
        }
        return true;
        break;
      case "card-number":
        if (!this.validateNumber()) {
          return false;
        }
        return true;
        break;
      case "date-MM":
        if (!this.validateMonth()) {
          return false;
        }
        return true;
        break;
      case "date-YY":
        if (!this.validateYear()) {
          return false;
        }
        return true;
        break;
      case "cvc":
        if (!this.validateCvc()) {
          return false;
        }
        return true;
        break;
    }
    return false;
  };

  validateName = () => {
    if (!this.nameReg.test(this.formField.value.trim())) {
      this.showError(`Only letters (name & surname)`);
      return false;
    } else {
      this.showSuccess();
      return true;
    }
  };

  validateNumber = () => {
    if (
      this.formField.value.length < this.minLength ||
      this.formField.value.length > this.maxLength
    ) {
      this.showError(`Number should consists of ${this.minLength} digits`);
      return false;
    } else if (!this.numReg.test(this.formField.value.trim())) {
      this.showError(`Only digits`);
      return false;
    } else {
      this.showSuccess();
      return true;
    }
  };

  validateMonth = () => {
    if (
      this.formField.value.length < this.minLength ||
      this.formField.value.length > this.maxLength ||
      !this.numReg.test(this.formField.value.trim())
    ) {
      this.showError(`Only ${this.minLength} digits`);
      return false;
    } else if (Number(this.formField.value) >= 13) {
      this.showError(`Max. 12`);
      return false;
    } else if (Number(this.formField.value) <= 0) {
      this.showError(`Min. 01`);
      return false;
    } else {
      this.showSuccess();
      return true;
    }
  };

  validateYear = () => {
    if (
      this.formField.value.length < this.minLength ||
      this.formField.value.length > this.maxLength
    ) {
      this.showError(`Only ${this.minLength} digits`);
      return false;
    } else if (!this.numReg.test(this.formField.value.trim())) {
      this.showError(`Only digits`);
      return false;
    } else {
      this.showSuccess();
      return true;
    }
  };

  validateCvc = () => {
    if (
      this.formField.value.length < this.minLength ||
      this.formField.value.length > this.maxLength
    ) {
      this.showError(`Should consists of 3 digits`);
      return false;
    } else if (!this.numReg.test(this.formField.value.trim())) {
      this.showError(`Only digits`);
      return false;
    } else {
      this.showSuccess();
      return true;
    }
  };

  showError = (msg) => {
    this.errorMsgEl.innerHTML = msg;
    this.errorMsgEl.classList.add("error");
    this.formField.classList.add("error");
    this.errorMsgEl.classList.remove("success");
    this.formField.classList.remove("success");
  };

  showSuccess = () => {
    this.errorMsgEl.innerHTML = "";
    this.errorMsgEl.classList.remove("error");
    this.formField.classList.remove("error");
    this.errorMsgEl.classList.add("success");
    this.formField.classList.add("success");
  };
}

