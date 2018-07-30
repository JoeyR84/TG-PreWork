var orderCount = 0;

function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log("Order: " + crustType + " crust topped with " + topping);
}

takeOrder("bacon", "thin");
takeOrder("pepperoni", "regular");
takeOrder("pesto", "thin");

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}
console.log(getSubTotal(orderCount));
function getTax() {
  return getSubTotal(orderCount) * 0.06;
}
function getTotal() {
  return getTax() + getSubTotal(orderCount);
}
console.log(getTotal());
