import React from 'react'
import MessageBoxItem from './MessageBoxItem'

interface Props {
    isActive: boolean
    handlePrevius: (tab: 0) => void
}

export default function MessageBox({ isActive, handlePrevius }: Props) {

    const defaultStyle = 'relative basis-full h-full lg:basis-1/2 md:basis-3/5 xl:basis-3/5 overflow-y-auto pl-4 duration-150'
    const activeStyle = defaultStyle + ' flex flex-col'
    const inactiveStyle = defaultStyle + ' collapse translate-x-full md:translate-x-0 md:visible md:flex md:flex-col'
    return (
        <section className={isActive ? activeStyle : inactiveStyle}>
            <header className='sticky h-full flex z-10 items-center justify-between top-0 shadow-xl bg-gray-950 backdrop-blur mb-8 pb-2'>
                <button
                    className='p-3 rounded-lg bg-indigo-800/20 hover:bg-indigo-700/20 duration-150 w-8 h-8 flex md:hidden items-center justify-center'
                    onClick={() => handlePrevius(0)}
                >{'<'}</button>
                <div>XXX</div>
            </header>

            {
                [1, 2, 3, 4, 5, 6, 7].map(msg => (
                    <MessageBoxItem key={msg} fromMe={msg % 2 === 0} />
                ))
            }

            <form className='gap-x-3 fixed md:sticky bottom-0 left-0 flex w-full z-10 bg-gray-950 p-4 md:pb-0'>
                <textarea
                    className='textInput rounded-lg h-12'
                    placeholder='Type your message'
                ></textarea>
                <button className='text-slate-100 bg-indigo-800 p-4 rounded-full '>
                    Send
                </button>
            </form>

        </section>
    )
}
