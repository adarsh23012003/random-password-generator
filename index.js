const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

let passwordLength = 12;
let allowedChars = "";

// Password length slider
document.getElementById("slider").addEventListener("input", (e) => {
  document.getElementById("slider-label").children[1].innerText =
    e.target.value;
  passwordLength = e.target.value;
});

// Update allowed characters based on checkbox
function updateAllowedChars() {
  allowedChars = "";

  if (document.getElementById("include-uppercase").checked) {
    allowedChars += upperCaseLetters;
  }
  if (document.getElementById("include-lowercase").checked) {
    allowedChars += lowerCaseLetters;
  }
  if (document.getElementById("include-numbers").checked) {
    allowedChars += numbers;
  }
  if (document.getElementById("include-symbols").checked) {
    allowedChars += symbols;
  }

  console.log(`Allowed characters updated: ${allowedChars}`);
}

// Checkbox listeners
let checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    e.target.nextElementSibling.innerHTML = e.target.checked
      ? "task_alt"
      : "radio_button_unchecked";
    updateAllowedChars();
  });
});

// Generate password
function generatePassword() {
  if (!allowedChars) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  document.getElementById("password").value = password;
}

// Copy password to clipboard
document.getElementById("copy").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});
