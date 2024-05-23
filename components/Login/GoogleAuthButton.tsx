'use client'
import React from 'react'
import GoogleIcon from './GoogleIcon'
import useAuthenticate from '@/hooks/useAuthenticate'

export default function GoogleAuthButton() {
    const { signInWithGoogle } = useAuthenticate()

    return (
        <button
            type='button'
            className='googleBtn'
            onClick={() => signInWithGoogle()}
        >
            <GoogleIcon />
            <span className='w-full'>Sign In with Google</span>
        </button>
    )
}
