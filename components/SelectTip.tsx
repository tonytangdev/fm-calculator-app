import React from 'react'
import { Button } from './Button'
import { Input } from './Input'

interface Props {

}

export const SelectTip = (props: Props) => {
    return (
        <div>
            <Button text="5%" onClick={e => console.log(e)}></Button>
            <Button text="10%" onClick={e => console.log(e)}></Button>
            <Button text="15%" onClick={e => console.log(e)}></Button>
            <Button text="25%" onClick={e => console.log(e)}></Button>
            <Button text="50%" onClick={e => console.log(e)}></Button>
            <Input placeholder="Custom"></Input>
        </div>
    )
}
