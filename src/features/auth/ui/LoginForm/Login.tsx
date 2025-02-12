import {SubmitHandler, useForm} from 'react-hook-form';
import {FormInput} from '../../../../../src/common/components/FormInput';
import {Button} from '../../../../../src/common/components/Button';
import {useLoginMutation} from '../../../../../src/app/api/authApi/authApi.ts';


type FormValue = {
    idInstance: string,
    apiTokenInstance: string
}

export const LoginForm = () => {
const [login]=useLoginMutation()
    const {register, handleSubmit, formState: { errors, isValid } } = useForm<FormValue>({mode:"onBlur"});

    const onSubmit: SubmitHandler<FormValue> = (data:FormValue) => {
        console.log('Form Data:', data);
        login(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                name="idInstance"
                label="idInstance"
                register={register}
                errors={errors}
            />
            <FormInput
                name="apiTokenInstance"
                label="apiTokenInstance"
                register={register}
                errors={errors}
            />
            <Button textBtn={"LOGIN"} type="submit" disabled={!isValid}/>
        </form>
    );
}

