import * as actionTypes from "./shopping-types";

export const setProducts=(items)=>{
 return{
    type:actionTypes.SET_PRODUCTS,
    payload:items
 }
}

export const addToCart=(itemID)=>{
return {
    type:actionTypes.ADD_TO_CART,
    payload:{
        id:itemID
    },
}
}

export const removeFromCart=(itemID)=>{
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:{
            id:itemID
        },
    }
}

export const adjustQty=(itemID,value)=>{
    return{
        type:actionTypes.ADJUST_QTY,
        payload:{
            id:itemID,
            qty:value
        },
    }
}

export const loadCurrentItem=(item)=>{
    return{
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    }
}

export const setUserDetails=(userDetails)=>{
    return{
        type:actionTypes.SET_USER,
        payload:userDetails,
    }
}

export const setDiscount=(discountPrice)=>{
    return{
        type:actionTypes.SET_DISCOUNT,
        payload:discountPrice
    }
}

