'use client';
import { createSlice } from "@reduxjs/toolkit"

const list = typeof window !== "undefined" ? window.localStorage.getItem("addressList") : []
const initialState = {
    addressModal: false,
    addAddressModal: false,
    addressList: list,
    selectedAddress: list,
}

const address = createSlice({
    name: 'address',
    initialState,
    reducers: {
        actionAddressModal: (state, action) => {
            state.addressModal = action.payload
        },
        actionAddAddressModal: (state, action) => {
            state.addAddressModal = action.payload
        },
        actionSelectedAddres: (state, action) => {
            state.selectedAddress = action.payload
        },
    }
})

export const { actionAddressModal, actionAddAddressModal } = address.actions
export default address.reducer