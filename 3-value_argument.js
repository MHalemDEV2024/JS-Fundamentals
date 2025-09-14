// Get all arguments starting from index 2
const args = process.argv.slice(2);

if (args[0] !== undefined) {
  console.log(args[0]);
} else {
  console.log("No argument");
}