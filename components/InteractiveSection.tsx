import React from 'react'
import { BillInput } from './BillInput'
import { PeopleInput } from './PeopleInput'
import { SelectTip } from './SelectTip'
import styles from '../styles/InteractiveSection.module.css'

interface Props {
    bill: number
    numberOfPeople: number
    onBillChange: (e: number) => void
    onNumberOfPeopleChange: (value: number) => void
    onTipPercentageChange: (value: number) => void,
    tipPercentage: number
}

export const InteractiveSection = ({
    bill,
    numberOfPeople,
    onBillChange,
    onNumberOfPeopleChange,
    onTipPercentageChange,
    tipPercentage
}: Props) => {
    return (
        <div>
            <div className={styles.inputContainer}>
                <BillInput value={bill} onChange={onBillChange}></BillInput>
            </div>
            <SelectTip value={tipPercentage} onChange={onTipPercentageChange}></SelectTip>
            <div className={styles.inputContainer}>
                <PeopleInput value={numberOfPeople} onChange={onNumberOfPeopleChange}></PeopleInput>
            </div>
        </div>
    )
}
