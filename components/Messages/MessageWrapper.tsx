'use client'

import React, { useState } from 'react'
import { MessagesSenders, MessageBox } from '@/components'

export default function MessageWrapper() {
    const [active, setActive] = useState<0 | 1>(0)

    const toggleTab = (tab: 0 | 1) => {
        if (tab === active) return
        setActive(tab)
    }

    return (
        <main className='h-screen max-h-screen box-border md:h-[70vh] w-full p-4 md:w-[95%] lg:w-[65%] xl:w-[50%] flex flex-wrap md:flex-nowrap bg-gray-950 text-slate-400 rounded-xl'>

            {/* Contacts Box */}
            <MessagesSenders isActive={active === 0} handlePrevius={toggleTab} />

            {/* Messages box */}
            <MessageBox isActive={active === 1} handlePrevius={toggleTab} />
        </main>
    )
}
