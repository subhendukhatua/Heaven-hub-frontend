import { createReducer, on } from "@ngrx/store"
import { findProductByCategoryFailure, findProductByCategorySuccess, findProductByIdFailure, findProductByIdSuccess } from "./product.action"
import { state } from "@angular/animations"

const initialState={
    products:[],
    loading:false,
    error:null,
    product:null
}

export const productReducer = createReducer(
    initialState,
    on(findProductByCategorySuccess,(state,{payload})=>({
        ...state, 
        products:payload,
        content:payload.content,
        loading:false
    })),

    on(findProductByCategoryFailure,findProductByIdFailure,(state,{error})=>({
        ...state, 
        loading:false,
        error:error
    })),

    on(findProductByIdSuccess,(state,{payload})=>({
        ...state, 
        product:payload,
        loading:false
    })),

)