// Helper function to show a red border around an input with invalid input
function showRedBorder(input) {
  input.classList.add('invalid');
}

// Helper function to hide a red border around an input with valid input
function hideRedBorder(input) {
  input.classList.remove('invalid');
}

// Helper boolean function to check whether an input meets its validation constraints as defined in the html pattern attribute
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

// Helper function to handle the input event 
function inputListener(e) {
  validateInput(e.currentTarget);
}

// Helper function to set alert mode with 2-step validation: Draw a red border around the input and display a custom message to the user
function setAlertMode(input) {
  showRedBorder(input);
  input.reportValidity();
  input.addEventListener('input', inputListener);
}

// Helper function to quit the alert mode and reset default mode with 1-step validation occurs only on a button click with no red border
function resetMode(input) {
  hideRedBorder(input);
  input.removeEventListener('input', inputListener);
}

export { validateInput, resetMode, setAlertMode };