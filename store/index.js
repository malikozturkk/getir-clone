import { configureStore } from "@reduxjs/toolkit"

import auth from "./auth"
import language from "./language"
import products from "./products"

const store = configureStore({
    reducer: {
        auth,
        language,
        products
    }
})

export default store