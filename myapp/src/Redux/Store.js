import { configureStore } from "@reduxjs/toolkit";
import {crudSlice} from './CrudSlice';
import {cartSlice} from './CartSlice';

export const store = configureStore({
    reducer:{
        crud:crudSlice.reducer,
        cartkey:cartSlice.reducer
    }
})