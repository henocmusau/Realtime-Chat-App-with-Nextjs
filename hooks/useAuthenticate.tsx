'use client'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react"
import { createClient } from '@/lib/supabase/client';
import { signOut } from '@/app/(auth)/actions';


export default function useAuthenticate() {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const supabase = createClient()
    const router = useRouter()

    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `http://localhost:4000/auth/callback`,
            },
        })
        router.push('/')
    }

    const handleSignOut = async () => {
        await signOut()
            .then(console.log)
            .catch(console.error)
    }

    return {
        signInWithGoogle,
        handleSignOut
    }
}
