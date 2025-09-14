// Get all arguments starting from index 2
const args = process.argv.slice(2);
// Convert to integer
const x = parseInt(args);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}