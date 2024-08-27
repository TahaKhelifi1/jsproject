//Reverse a String: Write a function that reverses a given string.//
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('hello'));
//Count Characters: Create a function that counts the number of characters in a string.//
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters('hello'));
//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.//
function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}   
console.log(capitalizeWords('hello world'));
//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.//
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}   
console.log(findMax([1, 2, 3, 4, 5]));

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin([1, 2, 3, 4, 5]));
//Sum of Array: Create a function that calculates the sum of all elements in an array.//
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
//Filter Array: Implement a function that filters out elements from an array based on a given condition.//
function filterArray(arr, condition) {
    let filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}   
console.log(filterArray([1, 2, 3, 4, 5], (x) => x % 2 === 0));
//Factorial: Write a function to calculate the factorial of a given number.//
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));
//Prime Number Check: Create a function to check if a number is prime or not.//
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11));
//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )//
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log(fibonacci(10));

