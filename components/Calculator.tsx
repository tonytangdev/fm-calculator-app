import { InteractiveSection } from "./InteractiveSection"
import { ResultDisplay } from "./ResultDisplay"
import styles from "../styles/Calculator.module.css"

interface Props {

}

export const Calculator = (props: Props) => {
    return (
        <div className={styles.container}>
            <InteractiveSection></InteractiveSection>
            <ResultDisplay></ResultDisplay>
        </div>
    )
}
