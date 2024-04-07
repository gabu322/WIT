export function calculateSellPrice(baseCost, minProfitMargin = 0.18, buyTaxes = (1.17 * 1.1)) {
    // Shopee taxes are 70% if the sell value is less then 6 BRL, and 20% + 3 BRL if the price is more then 6 BRL

    let sellPrice = 0,
        calculateProfitMargin = 0;

        console.log(sellPrice, baseCost, buyTaxes, minProfitMargin);
    do {
        if(sellPrice < 6) {
            calculateProfitMargin = (sellPrice - (baseCost * buyTaxes) - (sellPrice * 0.7)) / sellPrice;
            sellPrice += 0.2;
        } else {
            calculateProfitMargin = (sellPrice - (baseCost * buyTaxes) - (sellPrice * 0.2) - 3) / sellPrice;
            sellPrice += 0.5;
        }

        // Make sellPrice a float with 2 decimal places
        sellPrice = Math.round(sellPrice * 100) / 100;
    } while (calculateProfitMargin < minProfitMargin);

    return sellPrice;
}
