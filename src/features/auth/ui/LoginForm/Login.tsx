import {SubmitHandler, useForm} from 'react-hook-form';

type FormValue = {
    idInstance: string,
    apiTokenInstance: string
}


export const LoginForm = () => {

    const {register, handleSubmit, formState: { errors, isValid } } = useForm<FormValue>({mode:"onBlur"});

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        console.log('Form Data:', data);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{marginBottom: 20}}>
                <label htmlFor="idInstance">idInstance</label>
                <input {...register('idInstance', {required: 'field is required'})} />
                {errors.idInstance && <span style={{color: 'red'}}>{errors.idInstance.message}</span>}
            </div>

            <div style={{marginBottom: 20}}>
                <label htmlFor="apiTokenInstance">apiTokenInstance</label>
                <input {...register('apiTokenInstance', {required: "field is required"})} />
                {errors.apiTokenInstance && <span style={{ color: 'red' }}>{errors.apiTokenInstance.message}</span>}
            </div>

            <button type="submit" disabled={!isValid}>Login</button>
        </form>
    );
}

