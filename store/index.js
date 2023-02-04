import { configureStore } from "@reduxjs/toolkit"

import auth from "./auth"
import language from "./language"

const store = configureStore({
    reducer: {
        auth,
        language
    }
})

export default store