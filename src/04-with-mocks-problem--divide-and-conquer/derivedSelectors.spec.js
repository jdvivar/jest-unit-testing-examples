import { prop3DerivedSelector } from "./derivedSelectors";
import { prop3Selector } from "./pureSelectors"

jest.mock('./pureSelectors')

describe('04 - derived selectors', () => {
  test("prop3DerivedSelector should return double as original value", () => {
    const testValue = 4
    prop3Selector.mockReturnValue(testValue)
    expect(prop3DerivedSelector()).toBe(testValue * 2);
  });
})