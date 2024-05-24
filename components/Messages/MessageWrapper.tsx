'use client'

import React, { useRef, useState } from 'react'
import { MessagesSenders, MessageBox } from '@/components'
import { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'

interface Props {
    users: User[]
    connectedUser: User
}


export default function MessageWrapper({ users, connectedUser }: Props) {
    const [active, setActive] = useState<string | null>(null)
    const [messages, setMessages] = useState<string[]>([])

    const toggleTab = (tab: string) => {
        if (tab === active) return
        setActive(tab)
    }

    const addMessages = (message: string) => {
        setMessages(m => ([...m, message]))
    }

    return (
        <main className='h-full max-h-full overflow-x-hidden box-border md:h-[70vh] w-full p-4 md:w-[95%] lg:w-[65%] xl:w-[50%] flex flex-wrap md:flex-nowrap bg-gray-950 text-slate-400 rounded-xl'>

            {/* Contacts Box */}
            <MessagesSenders connectedUser={connectedUser} users={users} isActive={active === "ddd"} handlePrevious={toggleTab} />

            {/* Messages box */}
            <MessageBox
                isActive={active === 'dd'}
                handlePrevious={toggleTab}
                messages={messages}
                addMessages={addMessages}
                connectedUser={connectedUser}
            />
        </main>
    )
}
