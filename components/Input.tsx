interface Props {
    title?: string
    icon?: React.ReactNode
    value?: string,
    placeholder?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({
    title,
    icon,
    value,
    placeholder,
    onChange
}: Props) => {
    const inputId = `${title}-id`
    return (
        <div>
            <label htmlFor={inputId}>{title}</label>
            <div>
                {icon}
                <input placeholder={placeholder} type="number" name={inputId} id={inputId} value={value} onChange={onChange} />
            </div>
        </div>
    )
}
