// Get the first argument and convert it to an integer
const num = parseInt(process.argv[2]);

// Recursive factorial function
function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1; // base case: factorial of NaN, 0, or 1 is 1
  }
  return n * factorial(n - 1); // recursive step
}

// Print the result
console.log(factorial(num));