import {baseApi} from '../api/baseApi.ts'
import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(baseApi.middleware),
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
})



setupListeners(store.dispatch)
