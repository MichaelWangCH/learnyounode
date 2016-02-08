var inputs = process.argv.slice(2);
var result = inputs.map(str => str[0])
                       .reduce((x, y) => x + y);

console.log(`[${inputs}] becomes "${result}"`);
