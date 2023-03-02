import { operationTypes } from "../types/typesActions";

const initialValue = {
  counter: 0,
};

export const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case operationTypes.OPERACION_INCREMENTO:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case operationTypes.OPERACION_DECREMENTO:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};
