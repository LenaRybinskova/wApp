export type SendMessageResponse = {
    idMessage: string
}

export type ReceiveNotificationResponse = {
    receiptId: number,
    body: {
        typeWebhook: string,
        instanceData: {
            idInstance: number
            wid: string,
            typeInstance: string
        },
        timestamp: number
        idMessage: string
        senderData: {
            chatId: string
            sender: string
            senderName: string
            senderContactName: string
        },
        messageData: {
            typeMessage: string
            textMessageData: {
                textMessage: string
            }
        }
    }
}

export type DeleteNotificationResponse = {
    result: boolean
    reason: string
}