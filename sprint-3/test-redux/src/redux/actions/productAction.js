import { productType } from "../types/productType";

export const addProduct = (product) => {
    return {
        type: productType.ADD_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (idProduct) => {
    return {
        type: productType.DELETE_PRODUCT,
        payload: idProduct
    }
}

export const updateProduct = (product) => {
    return {
        type: productType.UPDATE_PRODUCT,
        payload: product
    }
}