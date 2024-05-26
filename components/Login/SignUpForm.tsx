import React from 'react'

import { InputField, PrimaryButton as SubmitButton } from '@/components'
import { UserRound } from 'lucide-react'
import { signup } from '@/app/(auth)/actions'
import Link from 'next/link'
import GoogleAuthButton from './GoogleAuthButton'
import PasswordInput from './PasswordInput'

export default function SignUpForm() {

    return (
        <>
            <form action={signup} className='flex flex-col gap-y-3 w-full md:w-[300px] text-slate-200'>
                <h1 className='text-3xl mb-4 text-center'>Sign Up</h1>

                <InputField
                    name='username'
                    label='Username'
                    icon={UserRound}
                />

                <PasswordInput />

                <SubmitButton text='Sign Up' />
            </form>
            <p className='separator'
            >OR</p>

            <GoogleAuthButton label='Sign Up with Google' />

            <p className='text-slate-200'>Already have an account ? <Link href={'/login'} className=' text-blue-400 underline'>Sign In</Link>
            </p>
        </>
    )
}
