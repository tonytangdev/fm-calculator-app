import styles from "../styles/Input.module.css"

interface Props {
    title?: string
    icon?: React.ReactNode
    value?: string,
    placeholder?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({
    title,
    icon,
    value,
    placeholder,
    onChange
}: Props) => {
    const inputId = `${title}-id`
    return (
        <>
            <label htmlFor={inputId} className={styles.label}>{title}</label>
            <div className={styles.customInput}>
                <div className={styles.iconContainer}>{icon}</div>
                <input placeholder={placeholder} type="number" name={inputId} id={inputId} value={value} onChange={onChange} className={styles.input} />
            </div>
        </>
    )
}
