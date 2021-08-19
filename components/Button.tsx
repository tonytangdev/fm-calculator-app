import { MouseEventHandler } from 'react'
import styles from '../styles/Button.module.css'

interface Props {
    isSecondary?: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>,
    text: string
}

export const Button = ({
    isSecondary,
    onClick,
    text
}: Props) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${isSecondary ? styles.secondaryButton : styles.primaryButton}`}>{text}</button>
    )
}
