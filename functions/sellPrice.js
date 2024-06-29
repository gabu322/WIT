
export function calculateSellPrice(baseCost) {
    // Shopee taxes are 70% if the sell value is less then 6 BRL, and 20% + 3 BRL if the price is more then 6 BRL
    baseCost = parseFloat(baseCost);

    let sellPrice = Math.round(baseCost),
        calculateProfitMargin = 0,
        minProfitMargin = 0.10,
        buyTaxes = 1.17 * 1.1;

    do {
        if (sellPrice < 10) {
            minProfitMargin = 0.1;
            calculateProfitMargin = (sellPrice - (baseCost * buyTaxes) - (sellPrice * 0.7)) / sellPrice;
            sellPrice += 0.2;
        } else {
            minProfitMargin = 0.20;
            calculateProfitMargin = (sellPrice - (baseCost * buyTaxes) - (sellPrice * 0.2) - 5) / sellPrice;
            sellPrice += 0.5;
        }

    } while (calculateProfitMargin < minProfitMargin);

    // Make sellPrice a float with 2 decimal places
    return Math.round(sellPrice * 100) / 100;
}
