export type LoginArgs= {
    idInstance: string;
    apiTokenInstance: string;
};

export type AuthResponse={
    "wid": string
    "countryInstance": string
    "typeAccount": string
    "webhookUrl": string
    "webhookUrlToken": string
    "delaySendMessagesMilliseconds": number
    "markIncomingMessagesReaded":string
    "markIncomingMessagesReadedOnReply": string
    "sharedSession": string
    "proxyInstance": string
    "outgoingWebhook": string
    "outgoingMessageWebhook": string
    "outgoingAPIMessageWebhook":string
    "incomingWebhook": string
    "deviceWebhook": string
    "statusInstanceWebhook": string
    "stateWebhook":string
    "enableMessagesHistory": string
    "keepOnlineStatus": string
    "pollMessageWebhook": string
    "incomingBlockWebhook": string
    "incomingCallWebhook": string
    "editedMessageWebhook": string
    "deletedMessageWebhook": string
}