{
    const exchangeCurrency = document.querySelector(".js-exchangeCurrency");
    const exchangeValue = document.querySelector(".js-exchangeValue");

    const calculatedCurrency = document.querySelector(".js-calculatedCurrency");
    const calculatedValue = document.querySelector(".js-calculatedValue");

    const labelRates = document.querySelector(".js-form__labelRates");

    const labelEUR = document.querySelector(".js-form__labelEUR");
    const labelRateEUR = document.querySelector(".js-form__labelRateEUR");
    const rateEUR = document.querySelector(".js-rateEUR");

    const labelUSD = document.querySelector(".js-form__labelUSD");
    const labelRateUSD = document.querySelector(".js-form__labelRateUSD");
    const rateUSD = document.querySelector(".js-rateUSD");

    const labelGBP = document.querySelector(".js-form__labelGBP");
    const labelRateGBP = document.querySelector(".js-form__labelRateGBP");
    const rateGBP = document.querySelector(".js-rateGBP");

    rateEUR.value = 4.44;
    rateUSD.value = 3.94;
    rateGBP.value = 5.40;


    const onLabelEURClick = () => {
        labelRates.hidden = true;
        labelRateEUR.hidden = false;
        rateEUR.hidden = false;
    }

    const onLabelRateEURClick = () => {
        if (rateEUR.value > 0) {
            labelRates.hidden = false;
            labelRateEUR.hidden = true;
            rateEUR.hidden = true;
        }
    }

    const onLabelUSDClick = () => {
        labelRates.hidden = true;
        labelRateUSD.hidden = false;
        rateUSD.hidden = false;
    }

    const onLabelRateUSDClick = () => {
        if (rateUSD.value > 0) {
            labelRates.hidden = false;
            labelRateUSD.hidden = true;
            rateUSD.hidden = true;
        }
    }

    const onLabelGBPClick = () => {
        labelRates.hidden = true;
        labelRateGBP.hidden = false;
        rateGBP.hidden = false;
    }

    const onlabelRateGBPClick = () => {
        if (rateGBP.value > 0) {
            labelRates.hidden = false;
            labelRateGBP.hidden = true;
            rateGBP.hidden = true;
        }
    }

    const settingCurrency = (source, destination) => {
        calculatedValue.value = null;
        if (source.value === destination.value) {
            if (destination.selectedIndex < 3)
                destination.selectedIndex += 1;
            else
                destination.selectedIndex = 0;
        }
    }

    const onExchangeCurrencyInput = () => {
        settingCurrency(exchangeCurrency, calculatedCurrency);
        calculationOnAnyInput();
    }

    const oncCalculatedCurrencyInput = () => {
        settingCurrency(calculatedCurrency, exchangeCurrency);
        calculationOnAnyInput();
    }

    const rateCalculation = () => {
        var rate = null;
        calculatedValue.value = null;
        switch (exchangeCurrency.value) {
            case "PLN":
                rate = 1;
                break;
            case "EUR":
                rate = +rateEUR.value;
                break;
            case "USD":
                rate = +rateUSD.value;
                break;
            case "GBP":
                rate = +rateGBP.value;
                break;
            default:
                rate = 0;
        }

        switch (calculatedCurrency.value) {
            case "PLN":
                return rate;
            case "EUR":
                return rate /= rateEUR.value;
            case "USD":
                return rate /= rateUSD.value;
            case "GBP":
                return rate /= rateGBP.value;
            default:
                return 0;
        }
    }

    const calculationOnAnyInput = () => {
        if (rateCalculation() > 0 & +exchangeValue.value > 0) {
            calculatedValue.value = (+exchangeValue.value * rateCalculation()).toFixed(2);
        }
    }

    labelEUR.addEventListener("click", onLabelEURClick);
    labelRateEUR.addEventListener("click", onLabelRateEURClick);
    labelUSD.addEventListener("click", onLabelUSDClick);
    labelRateUSD.addEventListener("click", onLabelRateUSDClick);
    labelGBP.addEventListener("click", onLabelGBPClick);
    labelRateGBP.addEventListener("click", onlabelRateGBPClick);

    exchangeCurrency.addEventListener("input", onExchangeCurrencyInput);
    calculatedCurrency.addEventListener("input", oncCalculatedCurrencyInput);
    exchangeValue.addEventListener("input", calculationOnAnyInput);
    rateEUR.addEventListener("input", calculationOnAnyInput);
    rateUSD.addEventListener("input", calculationOnAnyInput);
    rateGBP.addEventListener("input", calculationOnAnyInput);
}