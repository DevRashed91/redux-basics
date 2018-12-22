import * as actionTypes from "./actions";

const initialtState = {
  counter: 0
};

const reducer = (state = initialtState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default reducer;
