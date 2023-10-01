import { createSlice } from "@reduxjs/toolkit"
import Cookie from 'js-cookie'

const cookieLanguage = {
    language: typeof window !== "undefined" ? window.localStorage.getItem("i18nextLng") : false
}

const cookieCategory = Cookie.get('selectCategory')
const initialState = {
    productsList: typeof window !== "undefined" ? (window.localStorage.getItem("productList") ? JSON.parse(window.localStorage.getItem("productList")) : []) : [],
    selectCategory: cookieLanguage.language === 'tr' ? 'Yeni Ürünler' : 'New Products',
    selectSubCategory: cookieLanguage.language === 'tr' ? 'Yeni Ürünler' : 'New Products',
    selectSubCategories: [],
    selectedCategorySlug: cookieCategory || 'yeni-urunler'
}

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        actionProductsList: (state, action) => {
            state.productsList = action.payload
        },
        actionSelectedCategory: (state, action) => {
            state.selectCategory = action.payload
        },
        actionSelectedSubCategory: (state, action) => {
            state.selectSubCategory = action.payload
        },
        actionSelectedCategories: (state, action) => {
            state.selectSubCategories = action.payload
        },
        actionSelectedCategorySlug: (state, action) => {
            state.selectedCategorySlug = action.payload
            Cookie.set('selectCategory', action.payload)

        }
    }
})

export const { actionProductsList, actionSelectedCategory, actionSelectedSubCategory, actionSelectedCategories, actionSelectedCategorySlug } = products.actions
export default products.reducer