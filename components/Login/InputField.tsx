import { LucideIcon } from 'lucide-react'
import React, { RefObject } from 'react'

type Props = {
    type?: 'text' | 'password' | 'search'
    name: string
    label: string
    inputRef?: RefObject<HTMLInputElement>
    icon: LucideIcon
}

export default function InputField({ type, name, label, inputRef, icon: Icon }: Props) {
    return (
        <div className='relative w-full flex items-center'>
            {Icon ? <Icon className='loginSvg' /> : null}
            <input
                type={type || 'text'}
                name={name}
                id={name}
                ref={inputRef}
                placeholder={label}
                className='loginInput'
                autoComplete='off'
            />
        </div>
    )
}
