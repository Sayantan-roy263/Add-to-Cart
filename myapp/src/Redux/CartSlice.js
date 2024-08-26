import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../Helper/Helper";

const initialState={
    carts:[],
    
    // value:0
    // quantity:0,
}

export const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        // addCart:(state, {payload})=>{            
        //    const productId= state.carts.find((carts)=>(carts.id === payload.id));
        //    if(productId>0){
        //     productId.quantity += payload.quantity
        //    }else{
            
        //    }            
           
        // }
        addCart:(state, {payload})=>{
            const itemIndex = state.carts.findIndex((item)=>item.id === payload.id);
            console.log(itemIndex)

            // if(itemIndex<0){
                // state.carts[itemIndex].quantity += 1   
                // state.quantity = state.carts[itemIndex].qnty + 1   
                // state.quantity = state.quantity+1    
                // state.carts=[...state.carts, payload]  
                // state.carts.push({
                //     id:payload.id,
                //     quantity: 1
                // })    
                // state.carts={...state.carts, quantity: 1}
            // }else{
                // state.carts=[...state.carts,payload];           
                // state.quantity = state.carts=[...state.carts,payload];  
                // state.quantity = state.quantity+1   
                // state.carts[itemIndex].quantity = state.carts[itemIndex].quantity+1  
            // }
            // console.log(state.carts)
            if(itemIndex>=0){
                state.carts[itemIndex].quantity += 1
            }else{
                const temp = { ...payload, quantity:1}
                state.carts = [...state.carts, temp]
            }
                   
           
        },
        deleteitem:(state, {payload})=>{
            const del = state.carts.filter((item)=>item.id!==payload.id);
            state.carts = del
           
        },
        singleitem:(state, {payload})=>{
            const singleIndex = state.carts.findIndex((item)=>item.id===payload.id);
            // if()
            if(state.carts[singleIndex].quantity>=1){
                state.carts[singleIndex].quantity -= 1
            }
           
        }
    }
})
export const {addCart, deleteitem, singleitem} = cartSlice.actions; 