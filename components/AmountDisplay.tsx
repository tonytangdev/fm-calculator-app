import React from 'react'

interface Props {
    title: string,
    subTitle: string,
    price: number
}

export const AmountDisplay = ({
    title,
    subTitle,
    price
}: Props) => {
    return (
        <div>
            <div>
                <span>{title}</span>
                <span>/ {subTitle}</span>
            </div>
            ${price}
        </div>
    )
}
