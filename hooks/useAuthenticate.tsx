'use client'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react"


export default function useAuthenticate() {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleConnect = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        if (!username || !password || username.length < 4 || password.length < 4) return
        console.log('credentials', username, password)

        await signIn('credentials', {
            //   redirect: false,
            username,
            password,
        })
            .then((response) => {
                console.log('Successfully logged in');
                router.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return {
        usernameRef,
        passwordRef,
        handleConnect
    }
}
