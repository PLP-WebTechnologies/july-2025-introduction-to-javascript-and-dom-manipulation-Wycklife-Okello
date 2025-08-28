// ==========================
// Part 1: Basics
// ==========================

// Variable declaration + conditional
let userName = "";
document.getElementById("askNameBtn").addEventListener("click", function () {
  userName = prompt("What is your name?");
  if (userName) {
    document.getElementById("greeting").textContent = "Hello, " + userName + "! 👋";
  } else {
    document.getElementById("greeting").textContent = "You didn’t enter a name!";
  }
});

// ==========================
// Part 2: Functions
// ==========================

// Function 1: Calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: Format string
function formatMessage(name, amount) {
  return `${name}, your total is $${amount}`;
}

// Use functions on button click
document.getElementById("calculateBtn").addEventListener("click", function () {
  let total = calculateTotal(20, 3); // Example values
  let message = formatMessage(userName || "Guest", total);
  document.getElementById("totalOutput").textContent = message;
});

// ==========================
// Part 3: Loops
// ==========================

// Example 1: Countdown using for loop
document.getElementById("loopBtn").addEventListener("click", function () {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous
  for (let i = 5; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Example 2: Loop through array using forEach
let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Toggle class on text
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Add element dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created dynamically!";
document.getElementById("part4").appendChild(newParagraph);

// Listen to mouseover event
document.getElementById("toggleText").addEventListener("mouseover", function () {
  console.log("Mouse hovered over toggle text!");
});
