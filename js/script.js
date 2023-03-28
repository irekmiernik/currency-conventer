let exchangeRate = document.querySelector(".js-exchangeRate");
let exchangeValue = document.querySelector(".js-exchangeValue");
let exchangeValueSelect = document.querySelector(".js-exchangeValueSelect");
let calculatedValue = document.querySelector(".js-calculatedValue");
let valueSelect = document.querySelector(".js-valueSelect");
let formSubmit = document.querySelector(".js-form");

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    if (exchangeValueSelect.value === valueSelect.value) { calculatedValue.value = +exchangeValue.value; } else {
        if (exchangeValueSelect.value === "EURO") { calculatedValue.value = (+exchangeValue.value * exchangeRate.value).toFixed(2); } else {
            calculatedValue.value = (+exchangeValue.value / +exchangeRate.value).toFixed(2);
        }
    }
})