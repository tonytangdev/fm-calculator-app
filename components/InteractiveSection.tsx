import React from 'react'
import { BillInput } from './BillInput'
import { PeopleInput } from './PeopleInput'
import { SelectTip } from './SelectTip'
import styles from '../styles/InteractiveSection.module.css'

interface Props {
    bill: number,
    numberOfPeople: number,
    onBillChange: (e: number) => void
}

export const InteractiveSection = ({
    bill,
    numberOfPeople,
    onBillChange
}: Props) => {
    return (
        <div>
            <div className={styles.inputContainer}>
                <BillInput value={bill} onChange={onBillChange}></BillInput>
            </div>
            <SelectTip></SelectTip>
            <div className={styles.inputContainer}>
                <PeopleInput value={numberOfPeople}></PeopleInput>
            </div>
        </div>
    )
}
