// const state = {
//     prop1: 1,
//     prop2: {
//       prop3: 2
//     }
//   };

function prop3Selector(state) {
  return state.prop2.prop3;
}

function prop3DerivedSelector(state) {
  // Here's how you use it in your module
  return thisModule.prop3Selector(state) * 2;
}

const thisModule = {
  prop3Selector,
  prop3DerivedSelector
}

export default thisModule