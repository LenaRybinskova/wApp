import {SubmitHandler, useForm} from 'react-hook-form';
import {FormInput} from '../../../../../src/common/components/FormInput';
import {Button} from '../../../../../src/common/components/Button';
import {useNavigate} from 'react-router-dom';


type FormValue = {
    idInstance: string,
    apiTokenInstance: string
}

export const LoginForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormValue>({mode: 'onBlur'});
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValue> = (data: FormValue) => {
        localStorage.setItem('idInstance', data.idInstance)
        localStorage.setItem('apiTokenInstance', data.apiTokenInstance)
        navigate('/chat')
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
            <Button type="submit" disabled={!isValid}>Login</Button>
        </form>
    );
}

