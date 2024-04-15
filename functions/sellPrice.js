
export function calculateSellPrice(baseCost, minProfitMargin = 0.18, buyTaxes = (1.17 * 1.1)) {
    // Shopee taxes are 70% if the sell value is less then 6 BRL, and 20% + 3 BRL if the price is more then 6 BRL
    baseCost = parseFloat(baseCost);

    let sellPrice = baseCost, calculateProfitMargin = 0;

    do {
        if (sellPrice < 6) {
            calculateProfitMargin = (sellPrice - (baseCost * buyTaxes) - (sellPrice * 0.7)) / sellPrice;
            sellPrice += 0.2;
            minProfitMargin = 0.1;
        } else {
            calculateProfitMargin = (sellPrice - (baseCost * buyTaxes) - (sellPrice * 0.2) - 3) / sellPrice;
            sellPrice += 0.5;
            minProfitMargin = 0.18;
        }

    } while (calculateProfitMargin < minProfitMargin);

    // Make sellPrice a float with 2 decimal places
    return Math.round(sellPrice * 100) / 100;
}
