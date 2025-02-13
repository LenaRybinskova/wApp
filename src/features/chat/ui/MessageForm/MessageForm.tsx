import {SubmitHandler, useForm} from 'react-hook-form';

import {Button} from '../../../../../src/common/components/Button';
import {useSendMessageMutation} from '../../../../../src/app/api/authApi/authApi.ts';
import {FormInput} from '../../../../../src/common/components/FormInput';
import {Message} from '../../../../../src/features/chat/ui/Chat';


type FormValue = {
    message: string,
}
type Props = {
    callback: (data: Message) => void
}

export const MessageForm = (props: Props) => {
    const {callback} = props
    const [sentMessage] = useSendMessageMutation()

    const {handleSubmit, register,} = useForm<FormValue>();

    const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
        sentMessage(data.message).unwrap().then((res) => {
            callback({owner: 'me', message: data.message, id: res.idMessage})
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                name="message"
                label="message"
                register={register}
                errors={false}
            />
            <Button type="submit">отправить</Button>
        </form>
    )
}