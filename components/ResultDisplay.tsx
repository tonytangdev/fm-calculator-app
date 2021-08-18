import React from 'react'
import { AmountDisplay } from './AmountDisplay'
import { Button } from './Button'

interface Props {

}

export const ResultDisplay = (props: Props) => {
    return (
        <div>
            <AmountDisplay price={4.27} title="Tip Amount" subTitle="person"></AmountDisplay>
            <AmountDisplay price={32.79} title="Total" subTitle="person"></AmountDisplay>
            <Button onClick={e => console.log(e)} text="RESET" isSecondary></Button>
        </div>
    )
}
