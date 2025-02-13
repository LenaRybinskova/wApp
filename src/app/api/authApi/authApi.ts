import {baseApi} from '../../../../src/app/api/baseApi.ts';
import {SendMessageResponse} from '../../../../src/app/api/types.ts';

export const authApi = baseApi.injectEndpoints({
    endpoints: build => ({

        sendMessage: build.mutation<SendMessageResponse, string>({
            query: (message)=> {
                const idInstance = localStorage.getItem('idInstance');
                const apiTokenInstance = localStorage.getItem('apiTokenInstance');
                const telNumber = localStorage.getItem('telNumber');

                const payload = {
                    chatId: `${telNumber}@c.us`,
                    message: message
                }

                return {
                    body: payload,
                    method: 'POST',
                    url: `waInstance${idInstance}/sendMessage/${apiTokenInstance}`
                }
            },
        }),
    }),
})

export const { useSendMessageMutation} = authApi
