
import {Button} from '../../../../../src/common/components/Button';
import {Textarea} from '../../../../../src/common/components/TeaxtArea/TextArea.tsx';
import {useState} from 'react';
import {TelephoneForm} from '../../../../../src/features/chat/ui/TelephonForm';

export const Chat = () => {
    const [showInputPhone, setShowInputPhone] = useState<boolean>(false);
    const [showTextArea, setShowTextArea] = useState<boolean>(false);


    const createChatHandler = () => {
        setShowInputPhone(true)
    }


    return (
        <div>
            <div>
                <Button onClick={createChatHandler}>создать новый чат</Button>
                {showInputPhone && <TelephoneForm createChat={setShowTextArea}/>}
            </div>
            <div >
                {showTextArea ? <Textarea/> : <div>НЕТ СОЗДАННЫХ ЧАТОВ</div>}
            </div>
        </div>
    )
}
