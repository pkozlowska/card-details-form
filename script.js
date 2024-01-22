const formValidator = new FormValidator();

displayTypedName = () => {
  let numberInput = document.getElementById("name").value;
  document.getElementById("card-info-name").innerHTML = numberInput;
};


displayTypedNumber = () => {
    let numberInput = document.getElementById("card-number").value;
    document.getElementById("card-info-number").innerHTML = numberInput;
  };

  
displayTypedDateMM = () => {
    let numberInput = document.getElementById("date-MM").value;
    document.getElementById("card-info-date-MM").innerHTML = numberInput;
  };

  
displayTypedDateYY = () => {
    let numberInput = document.getElementById("date-YY").value;
    document.getElementById("card-info-date-YY").innerHTML = numberInput;
  };

  
displayTypedCVC = () => {
    let numberInput = document.getElementById("cvc").value;
    document.getElementById("card-info-cvc").innerHTML = numberInput;
  };
  