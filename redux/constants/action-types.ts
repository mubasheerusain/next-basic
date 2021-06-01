export const ActionTypes = {
    SET_PRODUCTS : "SET_PRODUCTS",
    SELECTED_PRODUCTS : "SELECTED_PRODUCTS",
    REMOVE_SELECTED_PRODUCTS : "REMOVE_SELECTED_PRODUCTS",
};

export interface SET_PRODUCTS{
    type: typeof ActionTypes.SET_PRODUCTS
    payload: product[]
}

export interface SELECTED_PRODUCTS{
   type: typeof ActionTypes.SELECTED_PRODUCTS
   payload: product
}

export interface REMOVE_SELECTED_PRODUCTS{
   type: typeof ActionTypes.REMOVE_SELECTED_PRODUCTS
   payload: product
}

export type product = {
    id: number,
    title: string,
    category: string,
    price: number,
    description: string,
    image: string
}

export type dispatchTypes = SET_PRODUCTS | SELECTED_PRODUCTS | REMOVE_SELECTED_PRODUCTS;