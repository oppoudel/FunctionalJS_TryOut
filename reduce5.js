/*const data = [1, 2, 3];
const doubled = data.reduce((acc, value) => {
  acc.push(value*2);
  return acc;
}, []);

const doubleMapped = data.map(item => item*2);
console.log(doubleMapped);*/

/*const data2 = [1, 2, 3, 4, 5, 6];
const evens = data2.reduce((acc, value) => {
  if (value % 2 === 0){
    acc.push(value);
  }
  return acc;
}, []);
console.log(evens);

const evensFilter = data2.filter(value => value %2 === 0).map(item => item*2);
console.log(evensFilter);*/
const stocks = [
  {symbol: "XFS", price: 240.22, volume: 23432},
  {symbol: "TNZ", price: 332.19, volume: 234},
  {symbol: "JXJ", price: 120.22, volume: 53432}
];
const filteredStockSymbols = stocks.reduce((acc, value) => {
  if (value.price >= 150.00){
    acc.push(value.symbol);
  }
  return acc;
}, []);
filteredStockSymbols.forEach(symbol => console.log(symbol));
console.log(filteredStockSymbols);
