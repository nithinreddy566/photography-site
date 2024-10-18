function convertCurrency() {
    // Get the input values
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    // Exchange rates (for demonstration, use static values)
    let exchangeRates = {
        'USD': { 'INR': 82.50, 'EUR': 0.92, 'GBP': 0.74 },
        'EUR': { 'USD': 1.09, 'INR': 90.10, 'GBP': 0.85 },
        'GBP': { 'USD': 1.35, 'EUR': 1.18, 'INR': 100.20 },
        'INR': { 'USD': 0.012, 'EUR': 0.011, 'GBP': 0.010 }
    };

    // Perform the conversion
    let conversionRate = exchangeRates[fromCurrency][toCurrency];
    let convertedAmount = amount * conversionRate;

    // Display the result
    document.getElementById('result').innerHTML = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
