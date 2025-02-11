type Props = {
    name: string
    label: string
    register: any
    errors: any

}

export const FormInput = (props: Props) => {
    const {name, register, errors} = props

    return (
        <div style={{marginBottom: 20}}>
            <label htmlFor={name}>{name}</label>
            <input {...register(name, {required: 'field is required'})} />
            {errors[name] && <span style={{color: 'red'}}>{errors[name].message}</span>}
        </div>
    )
}

