import { LucideIcon } from 'lucide-react'
import React, { RefObject } from 'react'

type Props = {
    type?: 'text' | 'password' | 'search'
    name: string
    label: string
    inputRef: RefObject<HTMLInputElement>
    icon: React.ReactNode
}

export default function InputField({ type, name, label, inputRef, icon }: Props) {
    return (
        <div className='relative w-full flex items-center'>
            {icon}
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
