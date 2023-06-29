import { prop3Selector, prop3DerivedSelector } from "./index.js";

describe('05', () => {
  test("prop3Selector should return prop3", () => {
    const testValue = 123;
    const testState = {
      prop3: testValue
    };
    expect(prop3Selector(testState)).toBe(testValue);
  });
  
  // PROBLEM
  // This test will fail, because we forgot to update it, because it wasn't a unit test
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