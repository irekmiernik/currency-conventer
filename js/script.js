let exchangeRate = document.querySelector(".js-exchangeRate");
let exchangeValue = document.querySelector(".js-exchangeValue");
let exchangeValueSelect = document.querySelector(".js-exchangeValueSelect");
let calculatedValue = document.querySelector(".js-calculatedValue");
let calculatedValueSelect = document.querySelector(".js-calculatedValueSelect");
let formSubmit = document.querySelector(".form");

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    if (exchangeValueSelect.value === "EUR") { calculatedValue.value = (+exchangeValue.value * exchangeRate.value).toFixed(2); } else {
        calculatedValue.value = (+exchangeValue.value / +exchangeRate.value).toFixed(2);
    }
})

exchangeRate.addEventListener("input", () => {
    calculatedValue.value = "N/A";
})

exchangeValue.addEventListener("input", () => {
    calculatedValue.value = "N/A";
})

exchangeValueSelect.addEventListener("input", () => {
    if (exchangeValueSelect.value === "EUR") { calculatedValueSelect.value = "PLN" };
    if (exchangeValueSelect.value === "PLN") { calculatedValueSelect.value = "EUR" };
})

calculatedValueSelect.addEventListener("input", () => {
    if (calculatedValueSelect.value === "EUR") { exchangeValueSelect.value = "PLN" };
    if (calculatedValueSelect.value === "PLN") { exchangeValueSelect.value = "EUR" };
})