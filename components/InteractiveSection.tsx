import React from 'react'
import { BillInput } from './BillInput'
import { PeopleInput } from './PeopleInput'
import { SelectTip } from './SelectTip'
import styles from '../styles/InteractiveSection.module.css'

interface Props {

}

export const InteractiveSection = (props: Props) => {
    return (
        <div>
            <div className={styles.inputContainer}>
                <BillInput></BillInput>
            </div>
            <SelectTip></SelectTip>
            <div className={styles.inputContainer}>
                <PeopleInput></PeopleInput>
            </div>
        </div>
    )
}
