import { decodePolarity } from '../src/client/js/polarityDecoder.js';

describe("Testing the polarity decoding functionality", () => {
  test("Testing the decodePolarity() function", () => {
    expect(decodePolarity).toBeDefined();
    expect(decodePolarity('P+')).toBe('strong positive');
    expect(decodePolarity('P')).toBe('positive');
    expect(decodePolarity('NEU')).toBe('neutral');
    expect(decodePolarity('N')).toBe('negative');
    expect(decodePolarity('N+')).toBe('strong negative');
    expect(decodePolarity('NONE')).toBe('no sentiment');
  })
});