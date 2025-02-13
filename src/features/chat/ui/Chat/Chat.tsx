import styles from './Chat.module.scss';
import {Button} from '../../../../../src/common/components/Button';
import {useState} from 'react';
import {TelephoneForm} from '../../../../../src/features/chat/ui/TelephonForm';
import {ChatField} from '../../../../../src/features/chat/ui/ChatField';

export const Chat = () => {
    const [showInputPhone, setShowInputPhone] = useState<boolean>(false);
    const [showChatField, setShowChatField] = useState<boolean>(false);


    const createChatHandler = () => {
        setShowInputPhone(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerLeftSide}>
                <Button onClick={createChatHandler}>создать новый чат</Button>
                {showInputPhone && <TelephoneForm createChat={setShowChatField}/>}
            </div>
            <div className={styles.containerRightSide}>
                {showChatField ? <ChatField/> : <div>НЕТ СОЗДАННЫХ ЧАТОВ</div>}
            </div>
        </div>
    )
}
