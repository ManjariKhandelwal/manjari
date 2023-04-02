import { ActionTypes } from "../constants/action-types"
export const SET_PRODUCTS=(products)=>{
    return{
        type:"SET_PRODUCTS",
        payload:products
    }
}

export const SELECTED_PRODUCT=(products)=>{
    return{
        type:"SELECTED_PRODUCT",
        payload:products
    }
}

export const REMOVE_SELECTED_PRODUCT=(products)=>{
    return{
        type:"REMOVE_SELECTED_PRODUCT",
       
    }
}