/**
 * Devuelve la suma de los numeros
 * @param {string} expression Expresion de numeros separados por coma
 */
export const sumNumberFrom = (expression) => {
   const numbers = parseNumbers(expression)
   return sum(numbers)
}

function parseNumbers(expression) {
   return tokenize(expression)
      .map(num => Number(num))
      .filter(num => !isNaN(num))
}

function tokenize(expression) {
   const regex = new RegExp("//(.+);(.+)")
   const matches = expression.match(regex)
   let separator = ","
   let parsedExpression = expression

   if (matches) {
      separator = matches[1]
      parsedExpression = matches[2]
   }

   return parsedExpression.split(separator)
}

function sum(numbers) {
   return numbers.reduce((previousValue, currentValue) =>
      previousValue + currentValue
   , 0)
}