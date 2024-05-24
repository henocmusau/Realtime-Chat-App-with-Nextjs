'use client'
import Image from 'next/image'
import React from 'react'

import userProfile from '@/assets/images/user.jpg'
import { UserMetadata } from '@supabase/supabase-js'

interface Props {
    handlePrevious: (tab: string) => void
    user: UserMetadata
}

export default function MessageSender({ handlePrevious, user }: Props) {
    const text = "Shell est un interpréteur de commande qui permet d'accéder"

    return (
        <div
            className='flex items-center mb-5 last:mb-0' onClick={() => handlePrevious('aa')}>
            <Image
                src={user.avatar_url ?? userProfile}
                width={100}
                height={100}
                // placeholder='blur'
                className='w-12 h-12 mr-4 rounded-full object-cover hover:contrast-125 duration-150'
                alt={`${user.full_name} Profile Picture`} />
            <div>
                <h2 className='font-semibold'>{user.full_name ?? 'John Doe'} </h2>
                <p className='text-slate-600 text-sm'>{text.slice(22) + '...'}</p>
            </div>
        </div>
    )
}
