# cash

This project aims to convert an amount of a currency to another one.    
These currencies must be in this list :    
- Australian Dollar
- Russian Rouble
- Euro
- Bulgarian Lev
- Real Brazilian
- Canadian Dollar
- Swiss Franc
- Chinese Yuan
- Czech Koruna
- Danish Krone
- Pound Sterling
- Hong Kong Dollar
- Croatian Kuna
- Hungarian Forint
- Indonesian Rupiah
- Israeli Shekel
- Indian Rupee
- Japanes Yen
- South Korean Won
- Mexican Peso
- Malaysian Ringgit
- Norwegian Krone
- Philippine Peso
- Polish Zloty
- Romanian New Leu
- Swedish Krona
- Singapore Dollar
- Thai Baht
- Turkish Lira
- US Dollar
- South African Rand
- New Zealand Dollar

## Getting started

### Prerequisites

Having Node.js installed on your computer.    
Having all libraries needed installed on your computer.    

### Installing

**How to install Node.js ?**    
Go on [Node.js](http://nodejs.org/)    

**How to install all the libraries ?**       
`$ cd C:\...\3-musketeers`    
`$ cd cash`    
`$ npm install`    

## Usage 

### Calculation

`$ node bin/index.js <amount> <currency>`   

#### Example 
```
$ node bin/index.js 1 usd //return √ 0.72 (GBP) Pound Sterling
$ node bin/index.js 1 usd eur pln aud //return √ 0.81 (EUR) Euro √ 3.42 (PLN) Polish Zloty √ 1.28 (AUD) Australian Dollar
```

### Command 

`$ node bin/index.js <command>`   

#### List of commands 
```
--save,  -s        Save currencies as default currencies
--help,  -h        Display help message
--version,  -v     Display version number
```

#### Example
```
$ node bin/index.js --save usd eur pln aud
$ node bin/index.js --help
$ node bin/index.js -v
```  

### List of currencies 
-AUD for Australian Dollar
-RUB for Russian Rouble
-EUR for Euro
-BGN for Bulgarian Lev
-BRL for Real Brazilian
-CAD for Canadian Dollar
-CHF for Swiss Franc
-CNY for Chinese Yuan
-CZK for Czech Koruna
-DKK for Danish Krone
-GBP for Pound Sterling
-HKD for Hong Kong Dollar
-HRK for Croatian Kuna
-HUF for Hungarian Forint
-IDR for Indonesian Rupiah
-ILS for Israeli Shekel
-INR for Indian Rupee
-JPY for Japanes Yen
-KRW for South Korean Won
-MXN for Mexican Peso
-MYR for Malaysian Ringgit
-NOK for Norwegian Krone
-PHP for Philippine Peso
-PLN for Polish Zloty
-RON for Romanian New Leu
-SEK for Swedish Krona
-SGD for Singapore Dollar
-THB for Thai Baht
-TRY for Turkish Lira
-USD for US Dollar
-ZAR for South African Rand
-NZD for New Zealand Dollar

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Authors

- **Yassine AZZOUT** - *[Initial work](https://github.com/92bondstreet/3-musketeers)*    
- **Benoît LY**

## License

[Uncopyrighted](http://zenhabits.net/uncopyright/)
