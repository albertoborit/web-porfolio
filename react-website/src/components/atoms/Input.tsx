import styles from  "./Input.module.css";

interface InputProps {
    placeholder: string;
    label: string
}

const Input = ({ placeholder, label }: InputProps) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input type="text" placeholder={placeholder} className={styles.input} />
        </div>
    );
}

export default Input;