import { userType } from "../types/productType";

const initialValue = {
  error: false,
  userAuth: null,
  users: [
    {
      name: "Adelia",
      email: "adelia@gmail.com",
      password: "123",
      typeUser: "admin",
      auth: false,
    },
    {
      name: "Alejandro",
      email: "alejandro@gmail.com",
      password: "1234",
      typeUser: "client",
      auth: false,
    },
  ],
};

export const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case userType.USER_LOGIN:
      const userFound = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      const handleError = userFound ? false : true;
      const user = state.users.map((user) => {
        if (
          user.email === action.payload.email &&
          user.password === action.payload.password
        ) {
          return {
            ...user,
            auth: true,
          };
        } else {
          return user;
        }
      });
      return {
        ...state,
        error: handleError,
        users: user,
        userAuth: userFound ? { ...userFound, auth: true } : null,
      };
    case userType.USER_LOGOUT:
      return {
        ...initialValue,
      };
    default:
      return state;
  }
};
