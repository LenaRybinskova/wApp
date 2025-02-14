import styles from "./FormInput.module.scss";

type Props = {
  name: string;
  label?: string;
  register: any;
  errors: any;
  className?: string;
};

export const FormInput = (props: Props) => {
  const { name, register, errors, label, className } = props;

  return (
    <div style={{ marginBottom: 20 }} className={styles.inputContainer}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {name}
        </label>
      )}
      <input
        {...register(name)}
        className={`${styles.input} ${className}`}
        autocomplete="off"
      />
      {errors[name] && (
        <span style={{ color: "red" }}>{errors[name].message}</span>
      )}
    </div>
  );
};
