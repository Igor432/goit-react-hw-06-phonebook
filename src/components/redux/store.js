import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";



const enhancer = devToolsEnhancer();


export const store = configureStore({
    reducer: rootReducer,
    enhancer
})