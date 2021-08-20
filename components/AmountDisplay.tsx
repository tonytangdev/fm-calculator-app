import styles from '../styles/AmountDisplay.module.css'

interface Props {
    title: string,
    subTitle: string,
    price: number
}

export const AmountDisplay = ({
    title,
    subTitle,
    price
}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>{title}</span>
                <span className={styles.subTitle}>/ {subTitle}</span>
            </div>
            <span className={styles.price}>
                ${price}
            </span>
        </div>
    )
}
