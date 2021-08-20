import Image from 'next/image'
import React from 'react'
import { Input } from './Input'
import DollarImage from '../public/icon-dollar.svg'

interface Props {

}

export const BillInput = (props: Props) => {
    return (
        <div>
            <Input icon={<Image src={DollarImage} alt="dollar sign" />} title="Bill" value="0" onChange={e => console.log(e)} />
        </div>
    )
}
