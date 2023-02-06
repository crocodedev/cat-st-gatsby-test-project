const numberToPrice = (price, addCurrency) => `${addCurrency ? '$' : ''}${price.toFixed(2)}`

export default numberToPrice
