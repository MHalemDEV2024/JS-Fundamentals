// Get all arguments starting from index 2
const args = process.argv.slice(2);

// Convert to integer
const num = parseInt(args);

// Check if it's a number or NaN
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}