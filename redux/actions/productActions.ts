import { ActionTypes, product } from "../constants/action-types"

export const setProducts = (products: product[]) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product: product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeselectedProduct = (product: product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}