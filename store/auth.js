import { createSlice } from "@reduxjs/toolkit"
import Cookie from 'js-cookie'

const cookieUser = Cookie.get('user')
const initialState = {
    user: cookieUser || false,//cookiede varsa true yoksa default false yap,
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
            Cookie.set('user', true)
        },
        logout: state => {
            state.user = false
            Cookie.remove('user')
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