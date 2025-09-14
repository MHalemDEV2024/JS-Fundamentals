# JS-Fundamentals

📌 **Project Overview**  
This project covers the **fundamentals of JavaScript**, focusing on scripting (like Python) and web front-end basics.  
You will practice variables, loops, functions, recursion, and working with command-line arguments in **Node.js**.

---

## 📚 Resources
You may find these helpful while working on the tasks:

- [Writing JavaScript Code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)  
- [Variables, Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)  
- [Operators & Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)  
- [Controlling Program Flow](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)  
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)  
- [Objects and Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)  
- [Intrinsic Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)  
- [Module patterns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)  
- [var, let, and const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)  
- [Modern JS](https://javascript.info/)  

---

## 🎯 Learning Objectives
By the end of this project, you should be able to explain (without Google):

- Why **JavaScript** is amazing  
- How to run a script with **Node.js**  
- How to create **variables** and **constants**  
- Differences between `var`, `let`, and `const`  
- JavaScript **data types**  
- How to use `if` and `if...else`  
- How to use **comments**  
- How to assign values to variables  
- How to use **while** and **for loops**  
- How to use `break` and `continue`  
- What functions are and how to use them  
- What happens if a function has no `return`  
- **Scope of variables**  
- **Arithmetic operators**  
- How to manipulate **objects (dictionaries)**  
- How to **import a file**  

---

## ✅ Requirements
- All code must run using **Node.js**  
- Use only **`const`** and **`let`** (❌ no `var`)  
- Use `console.log(...)` for all outputs  
- Each task has its **own file** in the repo  
- Repo must contain a **README.md**  

---

## 📝 Tasks

### 0. First constant, first print
File: `0-javascript_is_amazing.js`  
Print `"JavaScript is amazing"` using a constant variable.

---

### 1. 3 languages
File: `1-multi_languages.js`  
Print 3 lines:
  
`C is fun`\
`Python is cool`\
`JavaScript is amazing`

---

### 2. Arguments
File: `2-arguments.js`  
Print a message depending on the number of arguments:  
- No argument → `No argument`  
- One argument → `Argument found`  
- More than one → `Arguments found`

---

### 3. Value of my argument
File: `3-value_argument.js`  
Print the **first argument** passed.  
If none, print `"No argument"`.

---

### 4. Create a sentence
File: `4-concat.js`  
Print arguments in this format:  
`<first argument> is <second argument>`

---

### 5. An Integer
File: `5-to_integer.js`  
Convert the first argument to an integer:  
- If valid → `My number: <integer>`  
- If invalid → `Not a number`  

---

### 6. Loop to languages
File: `6-multi_languages_loop.js`  
Use an **array** and a **loop** to print:  
`C is fun`\
`Python is cool`\
`JavaScript is amazing`


---

### 7. I love C
File: `7-multi_c.js`  
Print `"C is fun"` x times, where x is the first argument.  
If invalid → `Missing number of occurrences`.

---

### 8. Square
File: `8-square.js`  
Print a **square** of size `x` using `"X"`.  
If invalid → `Missing size`.  

Example (`x = 4`):  
```
XXXX
XXXX
XXXX
XXXX
```


---

### 9. Add
File: `9-add.js`  
Print the sum of two integers. Define a function:  
```js
function add(a, b)
```
---
### 10. Factorial (Advanced)

File: `10-factorial.js`\
Compute the factorial of a number recursively.

* Factorial of NaN is **1**.
* Must use a **recursive function.**


## 🚀 Usage

Run any script with:


`node <filename>.js [arguments...]`

```
# Run with one argument
node 2-arguments.js Best School

# Run with multiple arguments
node 2-arguments.js Best School Rocks


# Run with a number argument
node 7-multi_c.js 3


# Run with square size
node 8-square.js 5

```