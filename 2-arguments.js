// process.argv is an array that contains everything written in the command line
// [0] = path to the Node.js executable
// [1] = path to the script file being run
// [2] and onwards = the actual arguments provided by the user

// slice(2) means: take a copy of the array starting from index 2 until the end
// result: an array containing only the user’s arguments


// Get the command-line arguments (excluding "node" and script name)
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}