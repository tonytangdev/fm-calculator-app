import React from 'react'
import { BillInput } from './BillInput'
import { PeopleInput } from './PeopleInput'
import { SelectTip } from './SelectTip'

interface Props {
    
}

export const InteractiveSection = (props: Props) => {
    return (
        <div>
            <BillInput></BillInput>
            <SelectTip></SelectTip>
            <PeopleInput></PeopleInput>
        </div>
    )
}
