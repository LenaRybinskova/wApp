import styles from './Chat.module.scss';
import {useEffect, useState} from 'react';
import {TelephoneForm} from '../../../../../src/features/chat/ui/TelephonForm';

import {
    useDeleteNotificationMutation,
    useReceiveNotificationQuery
} from '../../../../../src/app/api/authApi.ts';
import {InputMessageForm} from '../../../../../src/features/chat/ui/MessageForm/InputMessageForm.tsx';

export type Message={
    owner:string
    message:string
    id:string
}

export const Chat = () => {
    const {data:receiveNotification}=useReceiveNotificationQuery(undefined, {pollingInterval: 2000})
    const [deleteNotification] = useDeleteNotificationMutation();

    const [showChatField, setShowChatField] = useState<boolean>(false);
    const [messages, setMessages]=useState<Message[]>([])

    useEffect(() => {
        if (!receiveNotification) return;

        const { receiptId, body } = receiveNotification;
        const sender = body?.senderData?.sender
        const myConversation=`${localStorage.getItem('telNumber')}@c.us` === sender

        if(body?.messageData?.textMessageData?.textMessage.length>0 && myConversation){

            const newMessage: Message = {
                id:`${Date.now()}-${Math.random()}`,
                owner: body.senderData?.senderName,
                message: body?.messageData?.textMessageData?.textMessage,
            }
            setMessages((prev) => [...prev, newMessage]);
        }

            deleteNotification(receiptId);

    }, [receiveNotification, deleteNotification]);

    const createChatHandler = () => {
        setShowChatField(true)
    }

    const messageHandler=(data:Message)=>{
        setMessages(prevMessages => [...prevMessages, data])
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                 <TelephoneForm createChat={createChatHandler} />
            </div>
            <div className={styles.rightSide}>

                {showChatField && (
                    <>
                        <div className={styles.chatBox}>
                            {messages.map((message: Message) => (
                                <div key={message.id} className={`${styles.message} ${message.owner === 'me' ? styles.messageOwner : ''}`}>
                                    {message.message}
                                </div>
                            ))}
                        </div>
                        <div className={styles.messageForm}>
                            <InputMessageForm callback={messageHandler} />
                        </div>
                    </>
                )}
            </div>
        </div>

    )
}

