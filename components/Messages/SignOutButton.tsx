'use client'
import { signOut } from '@/app/(auth)/actions'
import useAuthenticate from '@/hooks/useAuthenticate'
import { LogOut } from 'lucide-react'
import React from 'react'

export default function SignOutButton() {
    const { handleSignOut } = useAuthenticate()

    return (
        <button className='float-right' onClick={handleSignOut}>
            <LogOut className=' w-6' />
        </button>
    )
}
