'use client'
import { signOut } from '@/app/(auth)/actions'
import { LogOut } from 'lucide-react'
import React from 'react'

export default function SignOutButton() {
    const handleSignOut = async () => {
        await signOut()
            .then(console.log)
    }

    return (
        <button className='float-right' onClick={handleSignOut}>
            <LogOut className=' w-6' />
        </button>
    )
}
