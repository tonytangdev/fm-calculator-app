import Image from 'next/image'
import React from 'react'
import { Input } from './Input'
import DollarImage from '../public/icon-dollar.svg'

interface Props {
    value: number,
    onChange: (e: number) => void
}

export const BillInput = ({
    value,
    onChange
}: Props) => {
    return (
        <div>
            <Input icon={<Image src={DollarImage} alt="dollar sign" />} title="Bill" value={`${value}`} onChange={e => onChange(e)} />
        </div>
    )
}
