{
    let exchangeCurrency = document.querySelector(".js-exchangeCurrency");
    let calculatedCurrency = document.querySelector(".js-calculatedCurrency");

    let settingCurrency = (source) => {
        if (source === "EUR") { return "PLN"; }
        if (source === "PLN") { return "EUR"; }
    }

    exchangeCurrency.addEventListener("input", () => {
        calculatedCurrency.value = settingCurrency(exchangeCurrency.value);
        calculatedValue.value = "N/A";
    })

    calculatedCurrency.addEventListener("input", () => {
        exchangeCurrency.value = settingCurrency(calculatedCurrency.value);
        calculatedValue.value = "N/A";
    })

    let exchangeValue = document.querySelector(".js-exchangeValue");
    let exchangeRate = document.querySelector(".js-exchangeRate");
    let calculatedValue = document.querySelector(".js-calculatedValue");
    let formSubmit = document.querySelector(".form");

    formSubmit.addEventListener("submit", (event) => {
        event.preventDefault();
        if (exchangeCurrency.value === "EUR") { calculatedValue.value = (+exchangeValue.value * exchangeRate.value).toFixed(2); } else {
            calculatedValue.value = (+exchangeValue.value / +exchangeRate.value).toFixed(2);
        }
    })

    exchangeRate.addEventListener("input", () => {
        calculatedValue.value = "N/A";
    })

    exchangeValue.addEventListener("input", () => {
        calculatedValue.value = "N/A";
    })

}
