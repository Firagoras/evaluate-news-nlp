// Function to show a red border around an invalid input
function showRedBorder(input) {
  input.classList.add('invalid');
}

// Function to hide a red border around a valid input
function hideRedBorder(input) {
  input.classList.remove('invalid');
}

// Function to check whether an input meets validation constraints as defined in the html file
function validateInput(input) {
  if (input.validity.valueMissing) {
    input.setCustomValidity('This field is required');
    showRedBorder(input);
    return false;
  } else if (input.validity.patternMismatch) {
    input.setCustomValidity(`${input.title}`);
    showRedBorder(input);
    return false;
  } else {
    input.setCustomValidity('');
    hideRedBorder(input);
    return true;
  }
}

// Function to perform as an event listener
function inputListener(e) {
  validateInput(e.currentTarget);
}

// Function to set alert mode allowing validation on input change
function setAlertMode(input) {
  showRedBorder(input);
  input.reportValidity();
  input.addEventListener('input', inputListener);
}

// Function to reset mode to default with validation on form submit
function resetMode(input) {
  hideRedBorder(input);
  input.removeEventListener('input', inputListener);
}

export { validateInput, resetMode, setAlertMode };