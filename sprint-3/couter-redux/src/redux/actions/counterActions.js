import { operationTypes } from "../types/typesActions";

export const incrementAction = () => {
    return {
        type: operationTypes.OPERACION_INCREMENTO,
        payload: 1
    };
}

export const decrementAction = () => {
    return {
        type: operationTypes.OPERACION_DECREMENTO
    }
}