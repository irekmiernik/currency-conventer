{
    const indexCurriency = (table, symbolCurriency) => {
        for (let i = 0; i < table.length; i++) {
            if (table[i].symbolCurriency === symbolCurriency) return i;
        }
    };

    const setCurriencyExchangeRate = (table, symbolCurriency, rateCurriency) => {
        table[indexCurriency(table, symbolCurriency)].rateCurriency = rateCurriency;
    };

    const getCurriencyExchangeRate = (table, symbolCurriency) => {
        return table[indexCurriency(table, symbolCurriency)].rateCurriency;
    };

    const verifyingCurrencies = (changedCurriency, notChangedCurriency) => {
        if (changedCurriency.value === notChangedCurriency.value) {
            notChangedCurriency.selectedIndex = notChangedCurriency.selectedIndex < (notChangedCurriency.length - 1) ?
                ++notChangedCurriency.selectedIndex : 0;
        }
    }

    const calculateValue = (exchangeValue, exchangeRateInputCurriency, exchangeRateOutputCurriency) => {
        if ((exchangeRateOutputCurriency > 0) & (+exchangeValue.value > 0)) {
            return ((exchangeRateInputCurriency / exchangeRateOutputCurriency) * +exchangeValue.value).toFixed(2);
        }
        return "";
    }

    const setCurriencies = (table) => {
        const inputCurrency = document.querySelector(".js-inputCurrency");
        const outputCurrency = document.querySelector(".js-outputCurrency");
        const inputAmount = document.querySelector(".js-inputAmount");
        const outputAmount = document.querySelector(".js-outputAmount");

        const onInputCurrencyInput = () => {
            verifyingCurrencies(inputCurrency, outputCurrency);
            outputAmount.value = calculateValue(inputAmount, getCurriencyExchangeRate(table, inputCurrency.value),
                getCurriencyExchangeRate(table, outputCurrency.value));
        }

        const onOutputCurrencyInput = () => {
            verifyingCurrencies(outputCurrency, inputCurrency);
            outputAmount.value = calculateValue(inputAmount, getCurriencyExchangeRate(table, inputCurrency.value),
                getCurriencyExchangeRate(table, outputCurrency.value));
        }

        verifyingCurrencies(outputCurrency, inputCurrency);
        inputCurrency.addEventListener("input", onInputCurrencyInput);
        outputCurrency.addEventListener("input", onOutputCurrencyInput);

    }

    const calculateExchangeValue = (table) => {
        const inputCurrency = document.querySelector(".js-inputCurrency");
        const outputCurrency = document.querySelector(".js-outputCurrency");
        const inputAmount = document.querySelector(".js-inputAmount");
        const outputAmount = document.querySelector(".js-outputAmount");

        const oninputAmountInput = () => {
            outputAmount.value = calculateValue(inputAmount, getCurriencyExchangeRate(table, inputCurrency.value),
                getCurriencyExchangeRate(table, outputCurrency.value));
        }

        inputAmount.addEventListener("input", oninputAmountInput);

    }


    const updateExchangedRates = (table) => {

        const labelUpdateExchangeRates = document.querySelector(".js-labelUpdateExchangeRates");
        const labelInputExchangeRates = document.querySelector(".js-labelInputExchangeRates");
        const inputExchangeRate = document.querySelector(".js-inputExchangeRate");
        const inputExchangeRateCurrency = document.querySelector(".js-inputExchangeRateCurrency");
        const inputCurrency = document.querySelector(".js-inputCurrency");
        const outputCurrency = document.querySelector(".js-outputCurrency");
        const inputAmount = document.querySelector(".js-inputAmount");
        const outputAmount = document.querySelector(".js-outputAmount");

        const onLabelExchangeRatesClick = () => {
            labelUpdateExchangeRates.hidden = true;
            labelInputExchangeRates.hidden = false;
            inputExchangeRate.hidden = false;
            inputExchangeRateCurrency.hidden = false;
            inputExchangeRate.value = getCurriencyExchangeRate(table, inputExchangeRateCurrency.value);
        }

        const onLabelInputExchangeRatesClick = () => {
            if (inputExchangeRate.value > 0) {
                labelUpdateExchangeRates.hidden = false;
                labelInputExchangeRates.hidden = true;
                inputExchangeRate.hidden = true;
                inputExchangeRateCurrency.hidden = true;
            } else inputExchangeRate.value = "";

        }

        const onInputExchangedRateInput = () => {
            if (inputExchangeRate.value > 0) {
                setCurriencyExchangeRate(table, inputExchangeRateCurrency.value, inputExchangeRate.value);
                outputAmount.value = calculateValue(inputAmount, getCurriencyExchangeRate(table, inputCurrency.value),
                    getCurriencyExchangeRate(table, outputCurrency.value));
            }
        }

        const onInputExchangedCurrencyInput = () => {
            inputExchangeRate.value = getCurriencyExchangeRate(table, inputExchangeRateCurrency.value);
        }

        labelUpdateExchangeRates.addEventListener("click", onLabelExchangeRatesClick);
        labelInputExchangeRates.addEventListener("click", onLabelInputExchangeRatesClick);
        inputExchangeRate.addEventListener("input", onInputExchangedRateInput);
        inputExchangeRateCurrency.addEventListener("input", onInputExchangedCurrencyInput);
    }

    const init = () => {

        const exchangeRates = [
            { symbolCurriency: "PLN", rateCurriency: 1.00 },
            { symbolCurriency: "EUR", rateCurriency: 4.56 },
            { symbolCurriency: "USD", rateCurriency: 3.95 },
            { symbolCurriency: "GBP", rateCurriency: 5.30 },
            { symbolCurriency: "CHF", rateCurriency: 4.88 },
        ];

        const render = () => {
            let htmlStringWithPLN = "";
            let htmlStringWithoutPLN = "";
            for (const rate of exchangeRates) {
                htmlStringWithPLN += `
                <option value=${rate.symbolCurriency}>
                    ${rate.symbolCurriency}
                </option>
                `;
                htmlStringWithoutPLN += rate.symbolCurriency === "PLN" ? "" :
                    `<option value=${rate.symbolCurriency}>
                    ${rate.symbolCurriency}
                </option>
                `;
            }
            document.querySelector(".js-inputCurrency").innerHTML = htmlStringWithPLN;
            document.querySelector(".js-outputCurrency").innerHTML = htmlStringWithPLN;
            document.querySelector(".js-inputExchangeRateCurrency").innerHTML = htmlStringWithoutPLN;
        }

        render();
        setCurriencies(exchangeRates);
        updateExchangedRates(exchangeRates);
        calculateExchangeValue(exchangeRates);
    }

    init();
}