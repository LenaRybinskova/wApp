import {baseApi} from '../../../../src/app/api/baseApi.ts';
import {ReceiveNotificationResponse, SendMessageResponse} from '../../../../src/app/api/types.ts';

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

        receiveNotification: build.query<ReceiveNotificationResponse, void>({
            query: ()=> {
                const idInstance = localStorage.getItem('idInstance');
                const apiTokenInstance = localStorage.getItem('apiTokenInstance');

                return {
                    method: 'GET',
                    url: `waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
                }
            },
        }),

        deleteNotification: build.mutation<any, any>({
            query: ()=> {
                const idInstance = localStorage.getItem('idInstance');
                const apiTokenInstance = localStorage.getItem('apiTokenInstance');
                const receiptId = localStorage.getItem('receiptId');


                return {
                    method: 'DELETE',
                    url: `waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`
                }
            },
        }),
    }),
})

export const { useSendMessageMutation, useReceiveNotificationQuery, useDeleteNotificationMutation} = authApi
