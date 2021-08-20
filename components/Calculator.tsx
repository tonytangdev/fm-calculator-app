import { InteractiveSection } from "./InteractiveSection"
import { ResultDisplay } from "./ResultDisplay"
import styles from "../styles/Calculator.module.css"
import { useEffect, useState } from "react"

interface Props {

}

export const Calculator = (props: Props) => {
    const [bill, setBill] = useState(0)
    const [numberOfPeople, setNumberOfPeople] = useState(0)
    const [tipPercentage, setTipPercentage] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [total, setTotal] = useState(0)

    const resetState = () => {
        setBill(0)
        setNumberOfPeople(0)
        setTipPercentage(0)
        setTipAmount(0)
        setTotal(0)
    }

    const onBillChange: (value: number) => void = value => setBill(value)
    const onNumberOfPeopleChange: (value: number) => void = value => setNumberOfPeople(value)
    const onTipPercentageChange: (value: number) => void = value => setTipPercentage(value)

    const onReset = () => resetState()

    useEffect(() => {
        if (bill > 0 && numberOfPeople > 0 && tipPercentage > 0) {
            const computedTip = bill * (tipPercentage / 100)
            setTipAmount(+computedTip.toFixed(2))

            const totalPerPerson = computedTip / numberOfPeople
            setTotal(+totalPerPerson.toFixed(2))
        }
    }, [bill, numberOfPeople, tipPercentage])

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
            <ResultDisplay tipAmount={tipAmount} total={total} onResetClick={onReset}></ResultDisplay>
        </div>
    )
}
