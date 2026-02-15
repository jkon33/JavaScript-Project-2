//String Manipulation Functions:

// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

//Array Functions:

// 4. Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Alternative without Math functions
function findMaxAlternative(arr) {
    return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}

function findMinAlternative(arr) {
    return arr.reduce((min, current) => current < min ? current : min, arr[0]);
}

// 5. Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// 6. Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example condition functions:
function isEven(num) {
    return num % 2 === 0;
}

function isGreaterThan5(num) {
    return num > 5;
}


//Mathematical Functions:

// 7. Factorial
function factorial(n) {
    if (n < 0) return undefined; // Factorial not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Recursive factorial
function factorialRecursive(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

// 8. Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// 9. Fibonacci Sequence
function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    
    let sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence;
}

// Fibonacci up to a maximum value (not just number of terms)
function fibonacciUpTo(maxValue) {
    if (maxValue < 0) return [];
    if (maxValue === 0) return [0];
    
    let sequence = [0, 1];
    while (sequence[sequence.length-1] + sequence[sequence.length-2] <= maxValue) {
        sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
    }
    return sequence;
}

// Example Usage:
// String functions
console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello")); // 5
console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"

// Array functions
let numbers = [3, 7, 2, 9, 1, 8, 4];
console.log(findMax(numbers)); // 9
console.log(findMin(numbers)); // 1
console.log(sumArray(numbers)); // 34
console.log(filterArray(numbers, isEven)); // [2, 8, 4]
console.log(filterArray(numbers, isGreaterThan5)); // [7, 9, 8]

// Math functions
console.log(factorial(5)); // 120
console.log(isPrime(17)); // true
console.log(isPrime(15)); // false
console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciUpTo(100)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]