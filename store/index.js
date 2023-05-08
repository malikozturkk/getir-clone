import { configureStore } from "@reduxjs/toolkit"

import auth from "./auth"
import language from "./language"
import products from "./products"
import basket from "./basket"

const store = configureStore({
    reducer: {
        auth,
        language,
        products,
        basket
    }
})

export default store