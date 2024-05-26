'use client'
import { Eye, EyeOff, Lock } from 'lucide-react'
import React, { useState } from 'react'

export default function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => setShowPassword(p => !p)

    return (
        <div className='relative w-full flex items-center'>
            <Lock className='loginSvg' />
            <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Password'
                className='loginInput '
                autoComplete='off'
            />
            {showPassword
                ? <EyeOff className='show' onClick={() => togglePassword()} />
                : <Eye className='show' onClick={() => togglePassword()} />
            }
        </div>
    )
}
