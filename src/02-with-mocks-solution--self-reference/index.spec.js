// It feels odd only importing what you're going to mock, right?
import { prop3Selector } from "./index.js";

jest.mock('./index.js')

describe('02', () => {
  // This test is OK, but it might less readable
  test("prop3Selector should return prop3", () => {
    const testValue = 123;
    const testState = {
      prop2: {
        prop3: testValue
      }
    };
    expect(jest.requireActual('./index.js').prop3Selector(testState)).toBe(testValue);
  });
  
  // This test is OK, but not too readable either
  test("prop3DerivedSelector should return double as original value", () => {
    const testValue = 4
    prop3Selector.mockReturnValue(testValue)
    expect(jest.requireActual('./index.js').prop3DerivedSelector()).toBe(testValue * 2);
  });
})