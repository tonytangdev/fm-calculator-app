import Image from 'next/image'
import React from 'react'
import { Input } from './Input'
import PersonImage from '../public/icon-person.svg'

interface Props {

}

export const PeopleInput = (props: Props) => {
    return (
        <div>
            <Input icon={<Image src={PersonImage} alt="person sign" />} title="Number of People" value="5" />
        </div>
    )
}
