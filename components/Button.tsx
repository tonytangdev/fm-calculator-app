import { MouseEventHandler } from 'react'
import styles from '../styles/Button.module.css'

interface Props {
    isSecondary?: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>,
    text: string,
    isDisabled?: boolean
}

export const Button = ({
    isSecondary,
    onClick,
    text,
    isDisabled
}: Props) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${isSecondary ? styles.secondaryButton : styles.primaryButton}`} disabled={isDisabled}>{text}</button>
    )
}
