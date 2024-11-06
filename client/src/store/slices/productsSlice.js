// src/features/products/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: "idle",
        
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
            state.status = "succeeded";
        },
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
        setLoading: (state) => {
            state.status = "loading";
        },
      
    },
});

export const { setProducts,  setLoading} = productsSlice.actions;
export default productsSlice.reducer;
