import { useState } from "react"
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

    const [isFocused, setIsFocused] = useState(false)

    const onFocus = () => setIsFocused(true)
    const onBlur = () => setIsFocused(false)

    const valueIsInvalid = parseFloat((value as string)) <= 0

    return (
        <>
            {!!title && (
                <div className={styles.headerContainer}>
                    <label htmlFor={inputId} className={styles.label}>{title}</label>
                    {valueIsInvalid && (<span className={styles.errorText}>Can't be zero</span>)}
                </div>
            )}
            <div className={`${styles.customInput} ${!!isFocused && styles.inputIsFocused} ${valueIsInvalid && styles.inputError}`}>
                <div className={styles.iconContainer}>{icon}</div>
                <input placeholder={placeholder} type="number" name={inputId} id={inputId} value={value} onChange={onChange} className={styles.input} onFocus={onFocus} onBlur={onBlur} />
            </div>
        </>
    )
}
