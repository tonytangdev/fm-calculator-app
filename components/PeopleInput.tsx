import Image from 'next/image'
import React from 'react'
import { Input } from './Input'
import PersonImage from '../public/icon-person.svg'

interface Props {
    value: number
}

export const PeopleInput = ({
    value
}: Props) => {
    return (
        <div>
            <Input icon={<Image src={PersonImage} alt="person sign" />} title="Number of People" value={`${value}`} onChange={e => console.log(e)} />
        </div>
    )
}
