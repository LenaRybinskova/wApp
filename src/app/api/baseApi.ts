import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: 'https://1103.api.green-api.com/',})(args, api, extraOptions)
        return result
    },
    endpoints: () => ({}),
    reducerPath: 'auth',
    tagTypes: ['auth'],
})

//
