import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
// import counterReducer from './features/counter/counterSlice'
// import taskReducer from './features/task/taskSlice'
// import userReducer from './features/user/userSlice'

// import logger from "./middlewares/logger";


// this is for local state
/* export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: taskReducer,
        user: userReducer
    },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)//
}) */

// for RTK query
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch