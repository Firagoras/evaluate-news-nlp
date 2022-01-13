import { validateInput } from '../src/client/js/formValidator.js';
  
describe("Testing the input validation functionality", () => { 
  test("Testing the validateInput() function", () => {
    expect(validateInput).toBeDefined();
  })
});