
const testReducer = (state, action) => {
  switch (action.type) {
  case 'ADD':
    return {
      value: state.value + 1,
    };
  default:
    return state;
  }
};

export default testReducer;
