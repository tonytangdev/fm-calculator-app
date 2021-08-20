import React from 'react'
import { Button } from './Button'
import { Input } from './Input'
import styles from '../styles/SelectTip.module.css'

interface Props {
    onChange: (value: number) => void
    value: number
}

export const SelectTip = ({
    value,
    onChange
}: Props) => {
    return (
        <div>
            <label className={styles.label}>Select Tip %</label>
            <div className={styles.buttonsContainer}>
                <Button text="5%" onClick={e => onChange(5)} isSecondary={value !== 5}></Button>
                <Button text="10%" onClick={e => onChange(10)} isSecondary={value !== 10}></Button>
                <Button text="15%" onClick={e => onChange(15)} isSecondary={value !== 15}></Button>
                <Button text="25%" onClick={e => onChange(25)} isSecondary={value !== 25}></Button>
                <Button text="50%" onClick={e => onChange(50)} isSecondary={value !== 50}></Button>
                <Input max={100} placeholder="Custom" onChange={e => onChange(e)
                }></Input>
            </div>
        </div>
    )
}
