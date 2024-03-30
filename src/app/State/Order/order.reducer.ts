
import { createReducer, on } from '@ngrx/store';
import * as OrderAction from './order.action';

export interface OrderState{
    loading:boolean;
    error:string | null;
    order:any| null;
    orders:any[];
}

export const initialState: OrderState={
    loading:false,
    error:null,
    order:null,
    orders:[],

};
export const orderReducer = createReducer(
    initialState,
    on(OrderAction.createOrderRequest,(state)=>({
        ...state,
        loading:true,
        error:null
    })),
    on(OrderAction.createOrderSuccess,(state,{order})=>({
        ...state,
        loading:false,
        order
    })),
    on(OrderAction.createOrderFailure,(state,{error})=>({
        ...state,
        loading:false,
        error,
    })),

    on(OrderAction.getOrderByIdRequest,(state)=>({
        ...state,
        loading:true,
        error:null
    })),
    on(OrderAction.getOrderByIdSuccess,(state,{order})=>({
        ...state,
        loading:false,
        order
    })),
    on(OrderAction.getOrderByIdFailure,(state,{error})=>({
        ...state,
        loading:false,
        error
    })),


    on(OrderAction.getOrderHistoryRequest,(state)=>({
        ...state,
        loading:true,
        error:null
    })),
    on(OrderAction.getOrderHistorySuccess,(state,{orders})=>({
        ...state,
        loading:false,
        orders
    })),
    on(OrderAction.getOrderHistoryFailure,(state,{error})=>({
        ...state,
        loading:false,
        error
    })),

)

