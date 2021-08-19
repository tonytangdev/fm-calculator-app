import React from 'react'
import { Button } from './Button'
import { Input } from './Input'
import styles from '../styles/SelectTip.module.css'

interface Props {

}

export const SelectTip = (props: Props) => {
    return (
        <div>
            <label className={styles.label}>Select Tip %</label>
            <div className={styles.buttonsContainer}>
                <Button text="5%" onClick={e => console.log(e)} isSecondary></Button>
                <Button text="10%" onClick={e => console.log(e)} isSecondary></Button>
                <Button text="15%" onClick={e => console.log(e)}></Button>
                <Button text="25%" onClick={e => console.log(e)} isSecondary></Button>
                <Button text="50%" onClick={e => console.log(e)} isSecondary></Button>
                <Input placeholder="Custom" onChange={e => console.log(e)
                }></Input>
            </div>
        </div>
    )
}
