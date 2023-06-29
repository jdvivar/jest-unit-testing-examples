// const state = {
//     prop1: 1,
//     prop2: {
//       prop3: 2
//     }
//   };
  
export function prop3Selector(state) {
  return state.prop2.prop3;
}

export function prop3DerivedSelector(state) {
  return prop3Selector(state) * 2;
}