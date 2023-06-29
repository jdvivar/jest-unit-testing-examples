// This way of importing modules is not traceable
import * as selectors from "./index.js";

describe.only('03', () => {
  // This test is OK, but it might be less readable
  test("prop3Selector should return prop3", () => {
    const testValue = 123;
    const testState = {
      prop2: {
        prop3: testValue
      }
    };
    expect(selectors.default.prop3Selector(testState)).toBe(testValue);
  });
  
  test("prop3DerivedSelector should return double as original value", () => {
    const testValue = 4
    // This is similar to the classic stub from @eventbrite/stub
    jest.spyOn(selectors.default, 'prop3Selector').mockReturnValue(testValue)
    expect(selectors.default.prop3DerivedSelector()).toBe(testValue * 2);
  });
})