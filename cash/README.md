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

End with an example of getting some data out of the system or using it for a little demo

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

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc





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




