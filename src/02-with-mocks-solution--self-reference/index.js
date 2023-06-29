// const state = {
//     prop1: 1,
//     prop2: {
//       prop3: 2
//     }
//   };

// This notation might feel odd to some readers
import * as thisModule from './index'
  
export function prop3Selector(state) {
  return state.prop2.prop3;
}

export function prop3DerivedSelector(state) {
  // Here's how you use it in your module
  return thisModule.prop3Selector(state) * 2;
}