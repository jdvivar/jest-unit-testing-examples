import { prop3Selector, prop3DerivedSelector } from "./index.js";

describe('00', () => {
  test("prop3Selector should return prop3", () => {
    const testValue = 123;
    const testState = {
      prop2: {
        prop3: testValue
      }
    };
    expect(prop3Selector(testState)).toBe(testValue);
  });
  
  // PROBLEM
  // This is not a unit test, it's a integration test
  test("prop3DerivedSelector should return double as original value", () => {
    const testValue = 2;
    const testState = {
      prop2: {
        prop3: testValue
      }
    };
    expect(prop3DerivedSelector(testState)).toBe(testValue * 2);
  });
})