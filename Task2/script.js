const display = document.getElementById("display");

let currentInput = "";

function appendNumber(num) {
  if (num === '.' && currentInput.includes('.')) return;
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === "") return;
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += op;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput || "0";
}

// Optional: Keyboard support
document.addEventListener("keydown", (e) => {
  if ("0123456789".includes(e.key)) appendNumber(e.key);
  if ("+-*/".includes(e.key)) appendOperator(e.key);
  if (e.key === "Enter") calculateResult();
  if (e.key === "Backspace") deleteLast();
  if (e.key.toLowerCase() === "c") clearDisplay();
});
