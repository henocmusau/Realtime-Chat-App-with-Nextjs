'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

import { GoogleIcon, InputField, PrimaryButton as SubmitButton } from '@/components'
import useAuthenticate from '@/hooks/useAuthenticate'
import { signIn } from 'next-auth/react'
import { Lock, UserRound } from 'lucide-react'

export default function LoginForm() {
    const [error, setError] = useState<any>('')
    const { usernameRef, passwordRef, handleConnect } = useAuthenticate()


    const searchParams = useSearchParams()
    const search = searchParams.get('error')

    useEffect(() => {
        if (search) setError(JSON.stringify(search))
        console.log(error)
    }, [search])


    return (
        <>
            <form onSubmit={handleConnect} className='flex flex-col gap-y-3 w-full md:w-[300px] text-slate-200'>
                <h1 className='text-3xl mb-4 text-center'>Login</h1>
                {
                    error.length > 0 ? <p className='rounded-xl p-2 bg-red-600/30 mb-2 text-slate-200'>{'Error : ' + error.toString()}</p> : null
                }

                <InputField
                    inputRef={usernameRef}
                    name='username'
                    label='Username'
                    icon={UserRound}
                />

                <InputField
                    inputRef={passwordRef}
                    type='password'
                    name='username'
                    label='Password'
                    icon={Lock}
                />

                <SubmitButton />
            </form>
            <p className='separator'
            >OR</p>
            <button
                type='button'
                className='googleBtn'
                onClick={() => signIn("google")}
            >
                <GoogleIcon />
                <span className='w-full'>Sign In with Google</span>
            </button>
        </>
    )
}
