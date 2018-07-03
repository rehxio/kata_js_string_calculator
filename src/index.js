/**
 * Devuelve la suma de los numeros
 * @param {string} expression Expresion de numeros separados por coma
 */
export const sumNumberFrom = (expression) => {
   return sum(parseNumbers(expression))
}

function parseNumbers(expression) {
   return tokenize(expression)
      .map(num => Number(num))
      .filter(num => !isNaN(num))
}

function tokenize(expression) {
   const separator = extractSeparator(expression)
   const parsedExpression = extractExpression(expression)

   return parsedExpression.split(separator)
}

function extractSeparator(expression) {
   const separatorRegex = new RegExp("//(.+);")
   const matches = expression.match(separatorRegex);
   return getFirstGroupOrDefaultValue(matches, ',')
}

function extractExpression(expression) {
   const separatorRegex = new RegExp("//.+;(.+)")
   const matches = expression.match(separatorRegex);
   return getFirstGroupOrDefaultValue(matches, expression)
}

function getFirstGroupOrDefaultValue(matches, defaultValue) {
   if (matches) {
      const [, capturedGroup] = matches
      return capturedGroup;
   }
  return defaultValue
}

function sum(numbers) {
   return numbers.reduce((previousValue, currentValue) =>
      previousValue + currentValue
   , 0)
}