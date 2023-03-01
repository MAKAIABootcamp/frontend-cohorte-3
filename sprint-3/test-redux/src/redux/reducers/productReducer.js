import { productType } from "../types/productType";

const initialState = [
  {
    id: "1",
    name: "Arroz x 500gr",
    price: "5500",
    quantity: 5,
  },
];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productType.ADD_PRODUCT:
      return [...state, action.payload];

    case productType.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);
    
    case productType.UPDATE_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });

    default:
      return state;
  }
};
