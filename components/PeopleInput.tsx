import Image from 'next/image'
import React from 'react'
import { Input } from './Input'
import PersonImage from '../public/icon-person.svg'

interface Props {
    value: number,
    onChange: (e: number) => void
}

export const PeopleInput = ({
    value,
    onChange
}: Props) => {
    return (
        <div>
            <Input icon={<Image src={PersonImage} alt="person sign" />} title="Number of People" value={`${value}`} onChange={e => onChange(e)} />
        </div>
    )
}
