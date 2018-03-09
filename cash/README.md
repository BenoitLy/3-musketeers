# cash

## Features

- Avoids rounding errors by using a [big number](https://www.npmjs.com/package/big.js) package
- Converts from/to a [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number),
  [Big](https://www.npmjs.com/package/big.js) or
  [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- Units can be added or removed

## Getting started

```
const convert = require('./index');    
const coins = convert(257, 'CZK', 'SGD');  

console.log(coins);
```

Usage:

 $ node bin/index.js <amount> <currency>

 $ node bin/index.js <command>

Commands:
--save,  -s       Save currencies as default currencies
--help,  -h       Display help message
--version,  -v     Display version number

 List of currencies: http://akep.us/currencies

Examples:

 $ node bin/index.js 1 usd

 $ node bin/index.js 1 usd eur pln aud

 $ node bin/index.js --save usd eur pln aud

 $ node bin/index.js --help

Code :




