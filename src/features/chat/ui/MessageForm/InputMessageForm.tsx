import {SubmitHandler, useForm} from 'react-hook-form';

import {Button} from '../../../../../src/common/components/Button';
import {useSendMessageMutation} from '../../../../../src/app/api/authApi.ts';
import {FormInput} from '../../../../../src/common/components/FormInput';
import {Message} from '../../../../../src/features/chat/ui/Chat';
import styles from './MessageForm.module.scss';


type FormValue = {
    message: string,
}
type Props = {
    callback: (data: Message) => void
}

export const InputMessageForm = (props: Props) => {
    const {callback} = props
    const [sentMessage] = useSendMessageMutation()

    const {handleSubmit, register,reset} = useForm<FormValue>();

    const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
        sentMessage(data.message).unwrap().then((res) => {
            callback({owner: 'me', message: data.message, id: res.idMessage})
            reset()
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <FormInput
                name="message"
                label="message"
                register={register}
                errors={false}
                className={styles.input}
            />
            <Button type="submit">отправить сообщение</Button>
        </form>
    )
}