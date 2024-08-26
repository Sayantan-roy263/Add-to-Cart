import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../Helper/Helper';
import axios from 'axios';

const initialState = {
    status:"",
    item:[{}], 
    // category:[{}]
}

export const view = createAsyncThunk(
    'view',

    async(formData)=>{
        let result = await axiosInstance.get('/products', formData);
        let res = await result?.data;
        console.log(res);
        return res;
    }
);

// export const viewcategory = createAsyncThunk(
//     'Category',

//     async(formData)=>{
//         let result = await axiosInstance.get
//     }
// )

export const crudSlice  = createSlice({
    name:"Crud",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(view.pending, (state,{payload})=>{
            state.status="Loading"
        })
        .addCase(view.fulfilled, (state, {payload})=>{
            state.status="Success"
            state.item = payload
        })
        .addCase(view.rejected, (state,{payload})=>{
            state.status="Rejected"
        })
        
    }
})