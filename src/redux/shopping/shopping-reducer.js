import * as actionTypes from "./shopping-types";

const INITIAL_VALUE={
    products:[],
    cart:[],
    coupons:[
        {
            id:1,
            coupondesc:"10% Off Use Coupon Code:DIWALI2022 ",
            couponcode:"DIWALI2022",
            coupondis:10
        },
        {
            id:2,
            coupondesc:"5% Off Use Coupon Code:SALE2022",
            couponcode:"SALE2022",
            coupondis:5
        },
        {
            id:3,
            coupondesc:"20% Off Use Coupon Code:BIG2022 ",
            couponcode:"BIG2022",
            coupondis:20
        },
        {
            id:4,
            coupondesc:"25% Off Use Coupon Code:LARGE2022 ",
            couponcode:"LARGE2022",
            coupondis:25
        }
    ],
    currentItem:null,
    userdetails:{},
    offerPrice:{},
}

const shopReducer=(state=INITIAL_VALUE,action)=>{
switch(action.type){
    case actionTypes.SET_PRODUCTS:
        return{...state,products:action.payload}
    case actionTypes.ADD_TO_CART:
        //get the item data from the products array
        const item=state.products.find(prod=>prod.id===action.payload.id)
        //check item is already present in cart
        const inCart=state.cart.find(item=>item.id===action.payload.id?true:false)
        return{
            ...state,
            cart:inCart
            ?state.cart.map((item)=>
            item.id===action.payload.id
            ?{...item,qty:item.qty+1}
            :item
            )
            :[...state.cart,{...item,qty:1}],
        };
    case actionTypes.REMOVE_FROM_CART:
        return{
            ...state,
            cart:state.cart.filter(item=>item.id!==action.payload.id),
        };
    case actionTypes.ADJUST_QTY:
        return{
            ...state,
            cart:state.cart.map(item=>item.id===action.payload.id?{...item,qty:+action.payload.qty}:item)
        };
    case actionTypes.LOAD_CURRENT_ITEM:
        return{ 
            ...state,
            currentItem:action.payload
        };
    case actionTypes.SET_USER:
        return{
            ...state,userdetails:action.payload,
        }
    case actionTypes.SET_DISCOUNT:
        return{
            ...state,offerPrice:action.payload,
        }
    default:
        return state;
}
}
export default shopReducer;