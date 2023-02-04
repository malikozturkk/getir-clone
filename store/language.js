import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    languageModal: false,
    selectedLanguage: 'do',
    selectLang: 'Türkçe (TR)'
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