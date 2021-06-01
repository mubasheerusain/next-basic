import { dispatchTypes, ActionTypes, product } from "../constants/action-types"

interface DefaultStateI {
    product: product[]
}
const initialState = {
    product: []
}

export const productReducer = (state: DefaultStateI = initialState, action: dispatchTypes) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, product: action.payload };
        default:
            return state;
    }
}

const init = {
    id: 0,
    title: "",
    category: "",
    price: 0,
    image: "",
    description: ""
}

export const selectedProductReducer = (state: product = init, action: dispatchTypes) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...action.payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return { }
        default:
            return state;
    }
}