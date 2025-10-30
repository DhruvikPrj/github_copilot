
export function calculateFactorial(n) {
    if (n < 0) throw new Error('Negative numbers are not allowed');
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

export function fibonacci(n) {
    if (n < 0) throw new Error('Negative numbers not allowed');
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

export function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


export function sumArray(arr) {
    if (!Array.isArray(arr)) throw new Error('Input must be an array');
    return arr.reduce((acc, num) => acc + num, 0);
}


export function maxInArray(arr) {
    if (!Array.isArray(arr)) throw new Error('Input must be an array');
    return Math.max(...arr);
}


export function isPositiveInteger(n) {
    return Number.isInteger(n) && n > 0;
}

export function squareArray(arr) {
    return arr.map(x => x * x);
}

export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function filterEvenNumbers(arr) {
    return arr.filter(x => x % 2 === 0);
}