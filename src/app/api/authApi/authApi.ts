import {baseApi} from '../../../../src/app/api/baseApi.ts';
import {AuthResponse, LoginArgs} from '../../../../src/app/api/types.ts';



export const authApi = baseApi.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<AuthResponse, LoginArgs>({
            query: (data) => {
                console.log("dsfsdf`", data)
                return {
                    method: 'GET',
                    url:`/waInstance${data.idInstance}/getStateInstance/${data.apiTokenInstance}`
                }
            },
        }),

    }),
})

export const {useLoginMutation} = authApi
