import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: false,
    signupModal: false,
    loginModal: false,
    profileModal: false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: state => {
            state.user = true
        },
        logout: state => {
            state.user = false
        },
        actionSignupModal: (state, action) => {
            state.signupModal = action.payload
        },
        actionLoginModal: (state, action) => {
            state.loginModal = action.payload
        },
        actionProfileModal: (state, action) => {
            state.profileModal = action.payload
        },
    }
})

export const { login, logout, actionSignupModal, actionLoginModal, actionProfileModal } = auth.actions
export default auth.reducer