let celsius = 60;
let fahrenheit = 45;
function convertionFromCelsiusToFahrenheit(c) {
    f = ((9 * c) / 5) + 32;
    return f
}
function convertionFromFahrenheitToCelsius(f) {
  c= ((f-32)*5)/9
    return c;
}

console.log(`60°C is ${convertionFromCelsiusToFahrenheit(celsius)}°F `);
console.log(`45°F is ${convertionFromFahrenheitToCelsius(fahrenheit)}°C`);