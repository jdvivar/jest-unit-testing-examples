import { prop3Selector } from "./pureSelectors";

export function prop3DerivedSelector(state) {
    return prop3Selector(state) * 2;
}