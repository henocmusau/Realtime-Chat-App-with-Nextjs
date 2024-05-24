'use client'
import React from 'react'
import MessageSender from './MessageSender'

import { User } from '@supabase/supabase-js'
import useSendersFilter from '@/hooks/useSendersFilter'

interface Props {
    users: User[]
    isActive: boolean
    handlePrevious: (tab: string) => void
    connectedUser: User
}

export default function MessagesSenders({ isActive, handlePrevious, users, connectedUser }: Props) {
    const { filteredSenders, onInputChange } = useSendersFilter(users)

    const defaultStyle = 'md:border-r pr-4 md:border-slate-900/50 h-full basis-full lg:basis-1/2 md:basis-2/5 xl:basis-2/5 overflow-y-auto duration-150'
    const activeStyle = defaultStyle + ' translate-y-0 visible'
    const inactiveStyle = defaultStyle + ' hidden md:flex flex-col translate-y-0 -translate-x-full md:translate-x-0'

    return (
        <section
            className={isActive ? activeStyle : inactiveStyle}
        >
            <header className='sticky top-0 bg-gray-950 backdrop-blur'>
                <h1 className='text-2xl font-semibold'>Messages</h1>
                <input
                    type='search'
                    name='search'
                    width={100}
                    height={100}
                    placeholder='Search...'
                    className='textInput my-4 placeholder:text-slate-500'
                    onChange={onInputChange}
                />
            </header>

            {filteredSenders().map((user) => {
                if (user.id === connectedUser.id) return null
                return <MessageSender key={user.id} user={user.user_metadata} handlePrevious={handlePrevious} />
            })}

        </section>
    )
}
