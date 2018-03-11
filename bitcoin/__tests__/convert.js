'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning then default ifself', () => {
  const result = convert(2, 'BTC', 'BTC');
  expect(result).toEqual(2);
});

test('should return a number', () => {
  const result = convert(2, 'BTC', 'BTC', 'Number');
  expect(typeof(result)).toBe('number');
});

test('should return a Big number', () => {
  const result = convert(2, 'BTC', 'BTC', 'Big');
  expect(result).toBeInstanceOf(Big);
});

test('should return a string', () => {
  const result = convert(2100, 'mBTC', 'BTC', 'String');
  expect(typeof(result)).toBe('string');
});

test('should convert a number from interger', () => {
  const result = convert(123456789012345, 'Satoshi', 'BTC', 'Number');
  expect(result).toEqual(1234567.89012345);
});

test('should convert a number from float', () => {
  const result = convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
  expect(result).toEqual(123456789012345);
});

test('should convert a string', () => {
  const result = convert('2', 'BTC', 'BTC', 'Number');
  expect(result).toEqual(2);
});

test('should convert a Big number', () => {
  const result = convert(new Big(2), 'BTC', 'BTC', 'Number');
  expect(result).toEqual(2);
});

test('should convert a NaN to a number', () => {
  const result1 = convert(NaN, 'BTC', 'BTC', 'Number');
  const result2 = convert(NaN, 'BTC', 'mBTC', 'Number');
  expect(typeof(result1)).toBe('number');
  expect(typeof(result2)).toBe('number');
});

test('should convert a NaN to a string', () => {
  const result1 = convert(NaN, 'BTC', 'BTC', 'String');
  const result2 = convert(NaN, 'BTC', 'mBTC', 'String');
  expect(typeof(result1)).toBe('string');
  expect(typeof(result2)).toBe('string');
});

test('should not convert a NaN to a Big', () => {
  expect(() => {convert(NaN, 'BTC', 'BTC', 'Big');}).toThrow();
});

test('should handle rounding errors', () => {
  const result1 = convert(4.6, 'Satoshi', 'BTC', 'Number');
  const result2 = convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  expect(typeof(result1)).toBe('number');
  expect(typeof(result2)).toBe('number');
});

test('should throw when untest is undefined', () => {
  expect(() => {convert(new Big(2), 'x', 'BTC', 'Number');}).toThrow();
  expect(() => {convert(new Big(2), 'BTC', 'x', 'Number');}).toThrow();
  expect(() => {convert(NaN, 'x', 'BTC', 'Number');}).toThrow();
  expect(() => {convert(NaN, 'BTC', 'x', 'Number');}).toThrow();
});

test('should throw when representaion is undefined', () => {
  expect(() => {convert(2, 'BTC', 'mBTC', 'x');}).toThrow();
  expect(() => {convert(NaN, 'BTC', 'mBTC', 'x');}).toThrow();
});

test('should allow untest aliases', () => {
  const result1 = convert(4.6, 'Satoshi', 'sat');
  const result2 = convert(4.6, 'μBTC', 'bit');
  expect(result1).toEqual(4.6);
  expect(result2).toEqual(4.6);
});

test('should add a unit', () => {
  convert.addUnit('BEN', 17);
  expect(convert.units()).toContain('BEN');
});

test('should remove a unit', () => {
  convert.removeUnit('BEN');
  expect(convert.units()).not.toContain('BEN');
});
