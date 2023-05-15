{
    const exchangedRates = {
        ratesTable: [],
        getIndex(symbol) {
            for (let i = 0; i < this.ratesTable.length; i++) {
                if (this.ratesTable[i].currencySymbol === symbol) return i;
            }
        },
        setExchangedRate(symbol, rate) {
            this.ratesTable[this.getIndex(symbol)].currencyRate = rate;
        },
        getExchangedRate(symbol) {
            return this.ratesTable[this.getIndex(symbol)].currencyRate;
        }
    }

    const exchangedCurrency = document.querySelector(".js-exchangedCurrency");
    const calculatedCurrency = document.querySelector(".js-calculatedCurrency");
    const exchangedAmount = document.querySelector(".js-exchangedAmount");
    const calculatedAmount = document.querySelector(".js-calculatedAmount");

    const calculateRate = (exchangedCurrencySymbol, calculatedCurrencySymbol) => {
        if (exchangedRates.getExchangedRate(calculatedCurrencySymbol.value) > 0) {
            return exchangedRates.getExchangedRate(exchangedCurrencySymbol.value) / exchangedRates.getExchangedRate(calculatedCurrencySymbol.value);
        } else { return 0; }
    }

    const calculate = () => {
        calculatedAmount.value = "";
        if ((calculateRate(exchangedCurrency, calculatedCurrency) > 0) & (+exchangedAmount.value > 0)) {
            calculatedAmount.value = (calculateRate(exchangedCurrency, calculatedCurrency) * +exchangedAmount.value).toFixed(2);
        }
    }

    {
        const verifyingCurrencies = (source, destination) => {
            if (source.value === destination.value) {
                if (destination.selectedIndex < 3) destination.selectedIndex++;
                else destination.selectedIndex = 0;
            }
        }

        const onExchangedCurrencyInput = () => {
            verifyingCurrencies(exchangedCurrency, calculatedCurrency);
            calculate();
        }

        const onCalculatedCurrencyInput = () => {
            verifyingCurrencies(calculatedCurrency, exchangedCurrency);
            calculate();
        }

        exchangedCurrency.addEventListener("input", onExchangedCurrencyInput);
        calculatedCurrency.addEventListener("input", onCalculatedCurrencyInput);
        exchangedAmount.addEventListener("input", calculate);
    }

    {
        const labelExchangeRates = document.querySelector(".js-labelExchangeRates");
        const labelInputExchangeRates = document.querySelector(".js-labelInputExchangeRates");
        const inputExchangeRate = document.querySelector(".js-inputExchangeRate");
        const inputExchangeCurrency = document.querySelector(".js-inputExchangedCurrency");

        const onLabelExchangeRatesClick = () => {
            labelExchangeRates.hidden = true;
            labelInputExchangeRates.hidden = false;
            inputExchangeRate.hidden = false;
            inputExchangeCurrency.hidden = false;
            inputExchangeRate.value = exchangedRates.getExchangedRate(inputExchangeCurrency.value);
        }

        const onLabelInputExchangeRatesClick = () => {
            if (inputExchangeRate.value > 0) {
                labelExchangeRates.hidden = false;
                labelInputExchangeRates.hidden = true;
                inputExchangeRate.hidden = true;
                inputExchangeCurrency.hidden = true;
            } else inputExchangeRate.value = "";

        }

        const onInputExchangedRateInput = () => {
            if (inputExchangeRate.value > 0) {
                exchangedRates.setExchangedRate(inputExchangeCurrency.value, inputExchangeRate.value);
                calculate();
            }
        }

        const onInputExchangedCurrencyInput = () => {
            inputExchangeRate.value = exchangedRates.getExchangedRate(inputExchangeCurrency.value);
        }

        labelExchangeRates.addEventListener("click", onLabelExchangeRatesClick);
        labelInputExchangeRates.addEventListener("click", onLabelInputExchangeRatesClick);
        inputExchangeRate.addEventListener("input", onInputExchangedRateInput);
        inputExchangeCurrency.addEventListener("input", onInputExchangedCurrencyInput);
    }

    const inputExchangedRates = (table) => {
        table.ratesTable.push({ currencySymbol: "PLN", currencyRate: 1.00 });
        table.ratesTable.push({ currencySymbol: "EUR", currencyRate: 4.56 });
        table.ratesTable.push({ currencySymbol: "USD", currencyRate: 3.95 });
        table.ratesTable.push({ currencySymbol: "GBP", currencyRate: 5.30 });
    }

    const init = () => { inputExchangedRates(exchangedRates); }
    init();
}