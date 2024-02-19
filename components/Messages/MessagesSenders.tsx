import React from 'react'
import MessageSender from './MessageSender'

interface Props {
    isActive: boolean
    handlePrevius: (tab: 1) => void
}

export default function MessagesSenders({ isActive, handlePrevius }: Props) {
    const defaultStyle = 'md:border-r pr-4 md:border-slate-900/50 h-full basis-full lg:basis-1/2 md:basis-2/5 xl:basis-2/5 overflow-y-auto duration-150'
    const activeStyle = defaultStyle + ' translate-y-0 visible'
    const inactiveStyle = defaultStyle + ' hidden md:flex flex-col translate-y-0 -translate-x-full md:translate-x-0'
    // const activeStyle = 'md:border-r pr-4 md:border-slate-900/50 h-full basis-full lg:basis-1/2 md:basis-2/5 xl:basis-2/5 overflow-y-auto translate-y-0 visible duration-150'
    // const inactiveStyle = 'hidden md:flex flex-col md:border-r pr-4 md:border-slate-900/50 h-full basis-full lg:basis-1/2 md:basis-2/5 xl:basis-2/5 translate-y-0 duration-150 -translate-x-full md:translate-x-0 overflow-y-auto'

    return (
        <section
            className={isActive ? activeStyle : inactiveStyle}
        >
            <header className='sticky top-0 bg-gray-950 backdrop-blur'>
                <h1 className='text-2xl font-semibold'>Messages</h1>
                <input
                    type='search'
                    name='search'
                    placeholder='Search...'
                    className='textInput my-4'
                />
            </header>

            {[1, 2, 3, 4, 5,].map((msg, i) => (
                <MessageSender key={i} handlePrevius={handlePrevius} />
            ))}


        </section>
    )
}
