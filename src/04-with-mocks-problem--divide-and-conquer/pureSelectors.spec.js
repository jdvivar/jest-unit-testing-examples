import { prop3Selector } from './pureSelectors'

describe('04 - pure selectors', () => {
    test("prop3Selector should return prop3", () => {
        const testValue = 123;
        const testState = {
            prop2: {
                prop3: testValue
            }
        };
        
        expect(prop3Selector(testState)).toBe(testValue);
    });
})