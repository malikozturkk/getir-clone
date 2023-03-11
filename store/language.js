import { createSlice } from "@reduxjs/toolkit"

const cookieLanguage = {
    language: typeof window !== "undefined" ? window.localStorage.getItem("i18nextLng") : false
}

const initialState = {
    languageModal: false,
    selectedLanguage: cookieLanguage.language === 'tr' ? 'do' : '7o',
    selectLang: cookieLanguage.language === 'tr' ? 'Türkçe (TR)' : 'English (EN)'
}

const language = createSlice({
    name: 'language',
    initialState,
    reducers: {
        actionLanguageModal: (state, action) => {
            state.languageModal = action.payload
        },
        actionSelectedLanguage: (state, action) => {
            state.selectedLanguage = action.payload
        },
        actionSelectedLang: (state, action) => {
            state.selectLang = action.payload
        }
    }
})

export const { actionLanguageModal, actionSelectedLanguage, actionSelectedLang } = language.actions
export default language.reducer