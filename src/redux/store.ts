import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'
// import logger from "./middlewares/logger";


export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    /* middleware: (getDefaaultMiddleware) => getDefaaultMiddleware().concat(logger) */
})

// export type RootState 