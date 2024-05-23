'use client'
import React from 'react'

import { GoogleIcon, InputField, PrimaryButton as SubmitButton } from '@/components'
import { Lock, UserRound } from 'lucide-react'
import { signup } from '@/app/(auth)/actions'

export default function SignUpForm() {
    // const [error, setError] = useState<any>('')
    // const { usernameRef, passwordRef, handleConnect } = useAuthenticate()


    // const searchParams = useSearchParams()
    // const search = searchParams.get('error')

    // useEffect(() => {
    //     if (search) setError(JSON.stringify(search))
    //     console.log(error)
    // }, [search])


    return (
        <>
            <form action={signup} className='flex flex-col gap-y-3 w-full md:w-[300px] text-slate-200'>
                <h1 className='text-3xl mb-4 text-center'>Sign Up</h1>

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

                <SubmitButton text='Sign Up' />
            </form>
            <p className='separator'
            >OR</p>
            <button
                type='button'
                className='googleBtn'
                // onClick={() => signIn("google")}
                formAction={signup}
            >
                <GoogleIcon />
                <span className='w-full'>Sign Up with Google</span>
            </button>
        </>
    )
}
