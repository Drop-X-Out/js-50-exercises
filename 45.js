function getTotalPrice(groceries){
let total = 0;

for (const item of groceries){
    console.log(item);

    const itemPrice = item.quantity*item.price;

    total +=itemPrice;
}

return total;
}

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]))