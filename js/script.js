let exchangeRate = document.querySelector(".js-exchangeRate");
let exchangeValue = document.querySelector(".js-exchangeValue");
let exchangeValueSelected = document.querySelector(".js-exchangeValueSelected");
let calculatedValue = document.querySelector(".js-calculatedValue");
let calculatedValueSelected = document.querySelector(".js-calculatedValueSelected");
let formSubmit = document.querySelector(".form");

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    if (exchangeValueSelected.value === "EUR") { calculatedValue.value = (+exchangeValue.value * exchangeRate.value).toFixed(2); } else {
        calculatedValue.value = (+exchangeValue.value / +exchangeRate.value).toFixed(2);
    }
})

exchangeRate.addEventListener("input", () => {
    calculatedValue.value = "N/A";
})

exchangeValue.addEventListener("input", () => {
    calculatedValue.value = "N/A";
})

exchangeValueSelected.addEventListener("input", () => {
    if (exchangeValueSelected.value === "EUR") { calculatedValueSelected.value = "PLN" };
    if (exchangeValueSelected.value === "PLN") { calculatedValueSelected.value = "EUR" };
})

calculatedValueSelected.addEventListener("input", () => {
    if (calculatedValueSelected.value === "EUR") { exchangeValueSelected.value = "PLN" };
    if (calculatedValueSelected.value === "PLN") { exchangeValueSelected.value = "EUR" };
})