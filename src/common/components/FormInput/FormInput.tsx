import {useForm} from 'react-hook-form';
import { Controller } from "react-hook-form";

type Props={
    name:string

}

export const FormInput = () => {

    const {register formState: { errors } } = useForm();

    return (
        <>
            <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input {...field} />}
            />

        </>

    )
}

const Input=()=>{
    return (
        <div style={{marginBottom: 20}}>
            <label htmlFor="idInstance">idInstance</label>
            <input {...register('idInstance', {required: 'field is required'})} />
            {errors.idInstance && <span style={{color: 'red'}}>{errors.idInstance.message}</span>}
        </div>
    )
}