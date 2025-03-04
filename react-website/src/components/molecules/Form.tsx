import Button from "../atoms/Button";
import Input from "../atoms/Input";
import styles from './Form.module.css'
const Form = () => {
    return (
        <div className={styles.form}>
            <Input placeholder="user@mail.com" label="Login" />
            <Button />
        </div>
    )
}

export default Form;