import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
    basketList: typeof window !== "undefined" ? (window.localStorage.getItem("basketList") ? JSON.parse(window.localStorage.getItem("basketList")) : []) : [],
    basketItemCount: 0,
    basketTotalAmount: 0
}

const basket = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        actionAddBasket: (state, action) => {
            const itemIndex = state.basketList.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.basketList[itemIndex].basketItemCount += 1
            }
            else {
                const tempProduct = { ...action.payload, basketItemCount: 1 }
                state.basketList.push(tempProduct)
            }
            localStorage.setItem("basketList", JSON.stringify(state.basketList))
        },
        actionBasketItemCount: (state, action) => {
            state.basketItemCount = action.payload
        }
    }
})

export const { actionAddBasket, actionBasketItemCount } = basket.actions
export default basket.reducer