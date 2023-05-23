import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basketList: typeof window !== "undefined" ? (window.localStorage.getItem("basketList") ? JSON.parse(window.localStorage.getItem("basketList")) : []) : [],
    basketItemCount: 0,
    basketTotalAmount: typeof window !== "undefined" ? (window.localStorage.getItem("totalPrice") ? JSON.parse(window.localStorage.getItem("totalPrice")) : 0) : 0,
}

const basket = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        actionAddBasket: (state, action) => {
            let price = Math.round(action.payload.price)
            state.basketTotalAmount += price
            localStorage.setItem("totalPrice", JSON.stringify(state.basketTotalAmount))
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
        actionDeleteBasket: (state, action) => {
            let price = Math.round(action.payload.price)
            state.basketTotalAmount -= price
            localStorage.setItem("totalPrice", JSON.stringify(state.basketTotalAmount))
            const itemIndex = state.basketList.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.basketList[itemIndex].basketItemCount -= 1
            }
            else {
                const tempProduct = { ...action.payload, basketItemCount: 1 }
                state.basketList.push(tempProduct)
            }
            localStorage.setItem("basketList", JSON.stringify(state.basketList))
        },
        actionRemoveBasket: (state, action) => {
            let price = Math.round(action.payload.price)
            state.basketTotalAmount -= price
            state.basketList = state.basketList.filter((basket) => basket.id !== action.payload.id)
            localStorage.setItem("totalPrice", JSON.stringify(state.basketTotalAmount))
            localStorage.setItem("basketList", JSON.stringify(state.basketList))
        },
        actionBasketItemCount: (state, action) => {
            state.basketItemCount = action.payload
        }
    }
})

export const { actionAddBasket, actionBasketItemCount, actionDeleteBasket, actionRemoveBasket } = basket.actions
export default basket.reducer