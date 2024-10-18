// Hardcoded exchange rates for demonstration purposes
const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, INR: 74.5 },
    EUR: { USD: 1.18, GBP: 0.88, INR: 88.2 },
    GBP: { USD: 1.33, EUR: 1.14, INR: 100.3 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.01 }
};

document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Check if from and to currencies are the same
    if (fromCurrency === toCurrency) {
        document.getElementById('convertedAmount').innerText = amount.toFixed(2);
        return;
    }

 // Convert the amount using the exchange rates
    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    // Update the result on the page
    document.getElementById('convertedAmount').innerText = convertedAmount.toFixed(2);
});
