import { createReducer, on } from "@ngrx/store";
import * as CartAction from './cart.action';
import { Action } from "rxjs/internal/scheduler/Action";

export interface CartState{
    cartItems:any[];
    loading:boolean;
    error:any;
    cart:any;

}

const initialState:CartState={
    cartItems:[],
    loading:false,
    error:null,
    cart:null,
};

export const cartReducer = createReducer(
    initialState, 
    on(CartAction.addItemToCartRequest,(state)=>({
        ...state,
        loading:true,
        error:null
    })),
    on(CartAction.addItemToCartSuccess,(state,action)=>({
        ...state,
        loading:false,
        cartItems:[...state.cartItems, action.payload],
    })),
    on(CartAction.addItemToCartFailure,(state,action)=>({
        ...state,
        loading:false,
        error:action.error
    })),

    
    on(CartAction.getCartRequest,(state)=>({
        ...state,
        loading:true,
        error:null
    })),
    on(CartAction.getCartSuccess,(state, action)=>({
        ...state,
        loading:false,
        cartItems:action.payload.cartItems,
        cart:action.payload
    })),
    on(CartAction.getCartFailure,(state, action)=>({
        ...state,
        loading:false,
        error:action.error
    })),



    on(CartAction.removeCartItemRequest,(state)=>({
        ...state,
        loading:true,
        error:null
    })),
    on(CartAction.removeCartItemSuccess,(state, action)=>({
        ...state,
        loading:false,
        cartItems:state.cartItems.filter((item)=>item.id!== action.cartItemId),
    })),
    on(CartAction.removeCartItemFailure,(state,action)=>({
        ...state,
        loading:false,
        error:action.error
    })),


    on(CartAction.updateCartItemRequest,(state)=>({
        ...state,
        loading:true,
        error:null
    })),
    on(CartAction.updateCartItemSuccess,(state,action)=>({
        ...state,
        loading:false,
        cartItems:state.cartItems.map((item)=>item.id === action.payload.id ? action.payload:item)
    })),
    on(CartAction.updateCartItemFailure,(state, action)=>({
        ...state,
        loading:false,
        error:action.error,
    })),
);