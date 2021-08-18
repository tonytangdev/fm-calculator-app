import React, { MouseEventHandler } from 'react'

interface Props {
    isSecondary?: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>,
    text: string
}

export const Button = ({
    isSecondary,
    onClick,
    text
}: Props) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
