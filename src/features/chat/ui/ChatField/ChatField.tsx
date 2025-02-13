import {MessageList} from '../../../../../src/features/chat/ui/MessageList';
import {MessageForm} from '../../../../../src/features/chat/ui/MessageForm/MessageForm.tsx';

export const ChatField = () => {
    return (
        <div>
            <div><MessageList/></div>
            <div>
                <MessageForm/>
            </div>
        </div>
    )
}