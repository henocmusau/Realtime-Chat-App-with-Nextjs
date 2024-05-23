'use client'
import React from 'react'

import { GoogleIcon, InputField, PrimaryButton as SubmitButton } from '@/components'
import { Lock, UserRound } from 'lucide-react'
import { login } from '@/app/(auth)/actions'

export default function LoginForm() {

    return (
        <>
            <form action={login} className='flex flex-col gap-y-3 w-full md:w-[300px] text-slate-200'>
                <h1 className='title__1'>Login</h1>

                <InputField
                    name='username'
                    label='Username'
                    icon={UserRound}
                />

                <InputField
                    type='password'
                    name='password'
                    label='Password'
                    icon={Lock}
                />

                <SubmitButton text='Sign In' />
            </form>
            <p className='separator'
            >OR</p>
            <button
                type='button'
                className='googleBtn'
            // onClick={() => signIn("google")}
            >
                <GoogleIcon />
                <span className='w-full'>Sign In with Google</span>
            </button>
        </>
    )
}
