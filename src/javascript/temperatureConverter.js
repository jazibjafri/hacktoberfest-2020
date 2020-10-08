const tempConverter = (fahrenheit) => {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
};

let fahrenheit = 55;

let result = tempConverter(fahrenheit).toFixed(3);
console.log(result);
