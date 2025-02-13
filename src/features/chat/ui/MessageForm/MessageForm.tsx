import {SubmitHandler, useForm} from 'react-hook-form';

import {Button} from '../../../../../src/common/components/Button';
import {useSendMessageMutation} from '../../../../../src/app/api/authApi/authApi.ts';
import {FormInput} from '../../../../../src/common/components/FormInput';


type FormValue = {
    message: string,
}
export const MessageForm = () => {
    const [sentMessage] = useSendMessageMutation()

    const { handleSubmit, register,} = useForm<FormValue>();

    const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
        sentMessage(data.message)
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