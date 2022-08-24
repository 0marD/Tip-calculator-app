let bill = document.querySelector(".Bill--input");
let billNumber = parseInt(bill.value);
bill.value=parseInt(100);

let people = document.querySelector(".people--input");
let peopleNumber = parseInt(people.value);
people.value=parseInt(5);

let tipAmount = document.querySelector(".results__value--amount");
let tipTotal = document.querySelector(".results__value--total");

let tipPercent = document.querySelectorAll(".btns-btn");

let tipValue = 0;


function removeActive() {
  tipPercent.forEach((element) => {
    element.classList.remove("btns-btn--selected");
  });
}
tipPercent.forEach((element) => {
  element.addEventListener("click", (event) => {
    // change styles
    removeActive();
    element.classList.add("btns-btn--selected");

    tipValue = parseInt(event.target.innerText.slice(0, -1));
    calculateTip();
  });
});

//  update bill
bill.addEventListener("click", () => {
  bill.value = "";
});

bill.addEventListener("input", () => {
  billNumber = parseFloat(bill.value);
  calculateTip();
});

//  fucntion calulate tip
function calculateTip() {
  tipAmount.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);
  tipTotal.innerText = (((billNumber * tipValue / 100) + billNumber)/peopleNumber).toFixed(2);
}

// update people
people.addEventListener("click", () => {
  people.value = "";
});
people.addEventListener("input", () => {
  let peopleError = document.querySelector(".inputpeople--error");
  let peopleLabel = document.querySelector(".peopleLabel");

  peopleNumber = parseFloat(people.value);
  if (peopleNumber == 0 || isNaN(peopleNumber)) {
    peopleLabel.style.display = "none";
    peopleError.style.display = "block";
    people.classList.add("error");
  } else {
    peopleLabel.style.display = "block";
    peopleError.style.display = "none";
    people.classList.remove("error");
    calculateTip();
  }
});
// update custom
let custom = document.querySelector(".btns--input");
custom.addEventListener("click", () => {
  removeActive();
});
custom.addEventListener("input", () => {
  tipValue = parseInt(custom.value);
  if (!isNaN(tipValue)) {
    calculateTip();
  }
});
// reset
resetBtn = document.querySelector(".result__button");
resetBtn.addEventListener("click", () => {
  bill.value = 0;
  billNumber = 0;
  people.value = 1;
  peopleNumber = 1;
  custom.value = "Custom";
  calculateTip();
});
