import {FormInput} from '../../../../../src/common/components/FormInput';
import {Button} from '../../../../../src/common/components/Button';
import {SubmitHandler, useForm} from 'react-hook-form';
import styles from './TelephonForm.module.scss'

type Props = {
    createChat: (create: boolean) => void
}

type FormValue = {
    telNumber: string
}

export const TelephoneForm = (props: Props) => {
    const {createChat} = props

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormValue>({mode: 'onChange'});

    const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
        createChat(true)
        localStorage.setItem('telNumber', data.telNumber)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <FormInput
                name="telNumber"
                label="telNumber"
                register={register}
                errors={errors}
            />
            <Button disabled={!isValid} type="submit">создать чат</Button>
        </form>
    )
}