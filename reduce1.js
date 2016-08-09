let orders;
orders = [
    { amount: 250},
    { amount: 400},
    { amount: 100},
    { amount: 325}
];

let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
/*var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
    var totalAmount = totalAmount + orders[i].amount;
}*/

console.log(totalAmount);
