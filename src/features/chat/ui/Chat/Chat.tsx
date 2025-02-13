import styles from './Chat.module.scss';
import {Button} from '../../../../../src/common/components/Button';
import {useEffect, useState} from 'react';
import {TelephoneForm} from '../../../../../src/features/chat/ui/TelephonForm';

import {
    useDeleteNotificationMutation,
    useReceiveNotificationQuery
} from '../../../../../src/app/api/authApi/authApi.ts';
import {MessageForm} from '../../../../../src/features/chat/ui/MessageForm/MessageForm.tsx';

export type Message={
    owner:string
    message:string
    id:string
}

export const Chat = () => {
    const {data:receiveNotification}=useReceiveNotificationQuery(undefined, {pollingInterval: 5000})
    const [deleteNotification] = useDeleteNotificationMutation();

    const [showInputPhone, setShowInputPhone] = useState<boolean>(false);
    const [showChatField, setShowChatField] = useState<boolean>(false);
    const [messages, setMessages]=useState<Message[]>([])

    useEffect(() => {
        if (!receiveNotification) return;

        const { receiptId, body } = receiveNotification;

            const newMessage: Message = {
                id:`${Date.now()}-${Math.random()}`,
                owner: body.senderData?.senderName,
                message: body?.messageData?.textMessageData?.textMessage,
            }

            setMessages((prev) => [...prev, newMessage]);
            deleteNotification(receiptId);

    }, [receiveNotification, deleteNotification]);

    const createChatHandler = () => {
        setShowInputPhone(true)
    }

    const messageHandler=(data:Message)=>{
        setMessages(prevMessages => [...prevMessages, data])
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerLeftSide}>
                <Button onClick={createChatHandler}>создать новый чат</Button>
                {showInputPhone && <TelephoneForm createChat={setShowChatField}/>}
            </div>
            <div className={styles.containerRightSide}>
                {messages.length>0 && messages.map((message:Message) => <div key={message.id}>{message.message}</div>)}
                <MessageForm callback={messageHandler}/>
            </div>
        </div>
    )
}
