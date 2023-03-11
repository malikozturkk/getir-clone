import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        actionProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { actionProducts } = products.actions
export default products.reducer