'use client'

import React, { FormEvent, useCallback, useRef } from 'react'
import MessageBoxItem from './MessageBoxItem'
import { useFormStatus } from 'react-dom'
import { Send } from 'lucide-react'
import SignOutButton from './SignOutButton'
import InputField from '../Login/InputField'
import { User } from '@supabase/supabase-js'

interface Props {
    isActive: boolean
    handlePrevious: (tab: string) => void
    messages: string[]
    addMessages: (msg: string) => void
    connectedUser: User | null
}

export default function MessageBox({ isActive, handlePrevious, addMessages, messages, connectedUser }: Props) {
    const { pending } = useFormStatus()
    const inputRef = useRef<any>()
    const setRef = useCallback((node: HTMLDivElement) => {
        if (!node) return
        node.scrollIntoView({ behavior: 'smooth' })
    }, [])

    const defaultStyle = 'relative max-h-full basis-full h-full lg:basis-1/2 md:basis-3/5 xl:basis-3/5 pl-4 duration-150'
    const activeStyle = defaultStyle + ' translate-x-auto flex flex-col'
    const inactiveStyle = defaultStyle + ' collapse translate-x-full md:translate-x-0 ease-in-out md:visible md:flex md:flex-col'

    function submitForm(e: FormEvent) {
        e.preventDefault()
        // const msg = formData.get('message') as string
        const msg = inputRef.current.value

        if (!msg || msg.length <= 0) return
        addMessages(msg)
        inputRef.current.value = ''
    }

    return (
        <section className={isActive ? activeStyle : inactiveStyle}>
            <header className='flex z-10 items-center justify-between shadow-xl bg-gray-950 backdrop-blur pb-4'>
                <button
                    className='p-3 rounded-lg bg-indigo-800/20 hover:bg-indigo-700/20 duration-150 w-8 h-8 flex md:hidden items-center justify-center'
                    onClick={() => handlePrevious('dd')}
                >{'<'}</button>
                <div className='w-full flex justify-end items-center gap-x-4'>
                    <h2 className=''>{`Hi, ${connectedUser?.user_metadata.full_name.split(' ')[0]}`} </h2>
                    <SignOutButton />
                </div>
            </header>

            <div className='grow h-full overflow-y-auto flex flex-col w-full'>
                {
                    messages.length > 0 ? messages.map((msg, i) => {
                        const lastMessage = messages.length - 1 === i
                        return <MessageBoxItem
                            key={i}
                            message={msg}
                            fromMe={i % 2 === 0}
                            isLastMessage={lastMessage}
                            lastMessageRef={setRef}
                        />
                    }) : <div className='grow h-full flex flex-col items-center justify-center text-center'><span className='block text-4xl'>😔</span> Oups, aucun message ! <br />Debuter ce Chat en envoyant le premier message !</div>
                }
            </div>

            <form onSubmit={submitForm} className='gap-x-3 flex w-full bg-gray-950 py-4 md:pb-0'>
                <InputField
                    otherStyles='textInput resize-none w-full mx-0 rounded-lg h-12'
                    label='Type your message'
                    name='message'
                    inputRef={inputRef}
                />

                <button
                    type='submit'
                    disabled={pending}
                    className='text-slate-100 bg-indigo-800/40 disabled:bg-slate-600/30 duration-150 p-4 rounded-full'>
                    <Send className='text-inherit stroke-slate-400 h-5 w-5' />
                </button>
            </form>
        </section>
    )
}
