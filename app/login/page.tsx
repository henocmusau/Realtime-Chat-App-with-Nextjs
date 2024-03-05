// 'use client'
// import { useSession } from "next-auth/react"
import React, { useState } from 'react'
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth/next"

import { authOptions } from '@/lib/auth/auth'
import { LoginForm } from '@/components'

export default async function Login() {

    // const { data: session } = useSession()

    const session = await getServerSession(authOptions)

    if (session?.user) redirect('/')

    return (
        <main className='flex flex-col bg-gray-950/60 backdrop-blur max-w-max items-center justify-center text-left p-8 rounded-xl'>
            <LoginForm />
        </main>
    )
}
