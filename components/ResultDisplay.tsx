import React from 'react'
import { AmountDisplay } from './AmountDisplay'
import { Button } from './Button'
import styles from '../styles/ResultDisplay.module.css'

interface Props {
    total: number
    tipAmount: number
    onResetClick: () => void
}

export const ResultDisplay = ({
    tipAmount,
    total,
    onResetClick
}: Props) => {
    const resetButtonIsDisabled = tipAmount <= 0

    return (
        <div className={styles.container}>
            <AmountDisplay price={tipAmount} title="Tip Amount" subTitle="person"></AmountDisplay>
            <AmountDisplay price={total} title="Total" subTitle="person"></AmountDisplay>
            <div className={styles.buttonContainer}>
                <Button onClick={onResetClick} text="RESET" isDisabled={resetButtonIsDisabled}></Button>
            </div>
        </div>
    )
}
