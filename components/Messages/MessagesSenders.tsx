import React from 'react'
import MessageSender from './MessageSender'

export default function MessagesSenders() {
    return (
        <section className='border-r pr-4 border-slate-900/50 basis-2/5 overflow-y-auto'>
            <header className='sticky top-0 bg-gray-950 backdrop-blur'>
                <h1 className='text-2xl font-semibold'>Messages</h1>
                <input
                    type='search'
                    name='search'
                    placeholder='Search...'
                    className='textInput my-4'
                />
            </header>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((msg, i) => (
                <MessageSender key={i} />
            ))}


        </section>
    )
}
