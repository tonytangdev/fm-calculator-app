import { InteractiveSection } from "./InteractiveSection"
import { ResultDisplay } from "./ResultDisplay"
import styles from "../styles/Calculator.module.css"
import { useState } from "react"

interface Props {

}

export const Calculator = (props: Props) => {
    const [bill, setBill] = useState(0)
    const [numberOfPeople, setNumberOfPeople] = useState(0)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)

    const onBillChange: (value: number) => void = value => setBill(value)
    const onNumberOfPeopleChange: (value: number) => void = value => setNumberOfPeople(value)
    const onTipPercentageChange: (value: number) => void = value => setTipPercentage(value)

    return (
        <div className={styles.container}>
            <InteractiveSection
                bill={bill}
                numberOfPeople={numberOfPeople}
                onBillChange={onBillChange}
                onNumberOfPeopleChange={onNumberOfPeopleChange}
                onTipPercentageChange={onTipPercentageChange}
                tipPercentage={tipPercentage}
            ></InteractiveSection>
            <ResultDisplay></ResultDisplay>
        </div>
    )
}
