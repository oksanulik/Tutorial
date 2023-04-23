console.log(77);

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(ame, callback) {
  console.log(`Реєструємо гостя ${ame}.`);
  return callback(ame);
}

// console.log(deliverPizza('jvgcfbm'));
// console.log(makePizza('HYYGGG'));
console.log(makeMessage('nmhgnnnnnnnnn', makePizza));
