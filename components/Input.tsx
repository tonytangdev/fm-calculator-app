import React from 'react'

interface Props {
    title?: string
    icon?: React.ReactNode
    value?: string,
    placeholder?: string
}

export const Input = ({
    title,
    icon,
    value,
    placeholder
}: Props) => {
    const inputId = `${title}-id`
    return (
        <div>
            <label htmlFor={inputId}>{title}</label>
            <div>
                {icon}
                <input placeholder={placeholder} type="number" name={inputId} id={inputId} value={value} />
            </div>
        </div>
    )
}
