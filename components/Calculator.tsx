import { InteractiveSection } from "./InteractiveSection"
import { ResultDisplay } from "./ResultDisplay"

interface Props {

}

export const Calculator = (props: Props) => {
    return (
        <div>
            <InteractiveSection></InteractiveSection>
            <ResultDisplay></ResultDisplay>
        </div>
    )
}
