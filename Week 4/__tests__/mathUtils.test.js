/**
 * Tests for utils/mathUtils.js
 * - Table-driven tests for functions
 */
import {
    calculateFactorial,
    fibonacci,
    isPrime,
    sumArray,
    maxInArray,
    isPositiveInteger,
    squareArray,
    randomInt,
    filterEvenNumbers
} from '../utils/mathUtils.js';

describe('mathUtils', () => {
    describe('calculateFactorial', () => {
        test.each([
            // normal cases
            { name: 'factorial of 0 is 1', input: 0, expected: 1 },
            { name: 'factorial of 5', input: 5, expected: 120 },
            // edge cases
            { name: 'factorial of 1', input: 1, expected: 1 }
        ])('$name', ({ input, expected }) => {
            expect(calculateFactorial(input)).toBe(expected);
        });

        test('throws for negative numbers', () => {
            expect(() => calculateFactorial(-3)).toThrow('Negative numbers are not allowed');
        });
    });

    describe('fibonacci', () => {
        test.each([
            { name: 'fib(0)', input: 0, expected: 0 },
            { name: 'fib(1)', input: 1, expected: 1 },
            { name: 'fib(7)', input: 7, expected: 13 }
        ])('$name', ({ input, expected }) => {
            expect(fibonacci(input)).toBe(expected);
        });

        test('throws for negative input', () => {
            expect(() => fibonacci(-2)).toThrow('Negative numbers not allowed');
        });
    });

    describe('isPrime', () => {
        test.each([
            { name: '2 is prime', input: 2, expected: true },
            { name: '4 is not prime', input: 4, expected: false },
            { name: 'large prime 97', input: 97, expected: true }
        ])('$name', ({ input, expected }) => {
            expect(isPrime(input)).toBe(expected);
        });

        test('numbers less than 2 return false', () => {
            expect(isPrime(1)).toBe(false);
            expect(isPrime(0)).toBe(false);
            expect(isPrime(-5)).toBe(false);
        });
    });

    describe('sumArray and maxInArray', () => {
        test('sumArray sums values and maxInArray finds maximum', () => {
            const arr = [1, 3, 2, 10];
            expect(sumArray(arr)).toBe(16);
            expect(maxInArray(arr)).toBe(10);
        });

        test('sumArray throws for non-array input', () => {
            expect(() => sumArray(null)).toThrow('Input must be an array');
        });

        test('maxInArray throws for non-array input', () => {
            expect(() => maxInArray({})).toThrow('Input must be an array');
        });
    });

    describe('isPositiveInteger, squareArray, randomInt, filterEvenNumbers', () => {
        test('isPositiveInteger detects positive integers', () => {
            expect(isPositiveInteger(3)).toBe(true);
            expect(isPositiveInteger(0)).toBe(false);
            expect(isPositiveInteger(-1)).toBe(false);
            expect(isPositiveInteger(2.5)).toBe(false);
        });

        test('squareArray squares elements', () => {
            expect(squareArray([1, 2, 3])).toEqual([1, 4, 9]);
        });

        test('randomInt returns value within range (deterministic check via boundaries)', () => {
            for (let i = 0; i < 10; i++) {
                const r = randomInt(1, 3);
                expect(r).toBeGreaterThanOrEqual(1);
                expect(r).toBeLessThanOrEqual(3);
            }
        });

        test('filterEvenNumbers filters correctly', () => {
            expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
            expect(filterEvenNumbers([])).toEqual([]);
        });
    });
});
