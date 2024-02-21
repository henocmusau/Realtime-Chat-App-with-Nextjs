'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

import { GoogleIcon, InputField, PrimaryButton as SubmitButton } from '@/components'
import useAuthenticate from '@/hooks/useAuthenticate'
import { signIn } from 'next-auth/react'
import { Lock, UserRound } from 'lucide-react'

export default function LoginForm() {
    const [error, setError] = useState('')
    const { usernameRef, passwordRef, handleConnect } = useAuthenticate()

    const searchParams = useSearchParams()
    const search = searchParams.get('error')

    useEffect(() => {
        if (search) setError(search)
    }, [search])


    return (
        <>
            <form onSubmit={handleConnect} className='flex flex-col gap-y-3 w-full md:w-[300px] text-slate-200'>
                <h1 className='text-3xl mb-4 text-center'>Sign In</h1>
                {
                    error.length > 0 ? <p className='rounded-xl p-2 bg-red-600/30 mb-2 text-slate-200'>Please, enter a valid username and password to sign in.</p> : null
                }

                <InputField
                    inputRef={usernameRef}
                    name='username'
                    label='Username'
                    icon={<UserRound className='loginSvg' />}
                />

                <InputField
                    inputRef={passwordRef}
                    type='password'
                    name='username'
                    label='Password'
                    icon={<Lock className='loginSvg' />}
                />

                <SubmitButton />
            </form>
            <p className='my-3 w-full text-slate-200 text-center'>OR</p>
            <button
                type='button'
                className='googleBtn'
                onClick={() => signIn("google")}
            >
                <GoogleIcon />
                Sign In with Google
            </button>
        </>
    )
}
