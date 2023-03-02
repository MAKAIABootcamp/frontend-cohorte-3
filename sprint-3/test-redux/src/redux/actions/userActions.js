import { userType } from "../types/productType";

export const userLoginAction = (user) => {
    return {
        type: userType.USER_LOGIN,
        payload: {
            ...user
        }
    };
}

export const userLogoutAction = () => {
    return {
        type: userType.USER_LOGOUT
    }
}