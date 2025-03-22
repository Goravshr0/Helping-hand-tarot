// Booking Function
function confirmBooking() {
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  if (date && time) {
    alert("Your tarot reading is booked on " + date + " at " + time);
    window.location.href = "payment.html";
  } else {
    alert("Please select a valid date and time!");
  }
}

// Payment Functions
function toggleDiscount() {
  let priceElement = document.getElementById("price");
  let isChecked = document.getElementById("discount").checked;
  if (isChecked) {
    priceElement.innerText = "₹400"; // Discounted Price
  } else {
    priceElement.innerText = "₹500"; // Original Price
  }
}

function payNow() {
  alert("Redirecting to UPI payment...");
  window.location.href = "upi://pay?pa=9103311929@fam&pn=Helping Hand Tarot&am=500";
}

// Signup Function
function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful! Now login.");
  window.location.href = "login.html";
}

// Login Function
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let savedUser = JSON.parse(localStorage.getItem("user"));
  if (savedUser && savedUser.email === email && savedUser.password === password) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login details!");
  }
}
