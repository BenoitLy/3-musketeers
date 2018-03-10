#!/usr/bin/env node

const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

/*
 *Creation of the argv constant.
 *This constant contain the command entered by the user.
 */
const argv = process.argv.slice(2);

/**
 *Call of the helpers function with the "agrv" command entered by the user.
 */
helpers(argv);

/** 
 *Creation of the command constant.
 *@param {integer} argv[0] - The amount that the user wants to convert.
 *@param {string} argv[1] - The currency the user wants to be converted.
 *@param {string} argv.length > 2 - The currency(ies) the user wants to convert in.
 */
const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP'])
};

/**
 *Call of the cash function with the "command" command entered by the user.
 */
cash(command);
