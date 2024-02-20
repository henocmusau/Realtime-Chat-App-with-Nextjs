'use client'

import React, { LegacyRef, RefObject, useCallback, useRef } from 'react'
import MessageBoxItem from './MessageBoxItem'
import { useFormStatus } from 'react-dom'

interface Props {
    isActive: boolean
    handlePrevius: (tab: 0) => void
    messages: string[]
    addMessages: (msg: string) => void
}

export default function MessageBox({ isActive, handlePrevius, addMessages, messages }: Props) {
    const { pending } = useFormStatus()
    const inputRef = useRef<any>()
    const setRef = useCallback((node: HTMLDivElement) => {
        if (!node) return
        node.scrollIntoView({ behavior: 'smooth' })
    }, [])

    const defaultStyle = 'relative max-h-full basis-full h-full lg:basis-1/2 md:basis-3/5 xl:basis-3/5 pl-4 duration-150'
    const activeStyle = defaultStyle + ' flex flex-col'
    const inactiveStyle = defaultStyle + ' collapse translate-x-full md:translate-x-0 md:visible md:flex md:flex-col'

    function submitForm(formData: FormData) {
        const msg = formData.get('message') as string
        // const message = formRef?.current?.value?.toString()
        // console.log(message)
        if (!msg || msg.length <= 0) return
        addMessages(msg)
        inputRef.current.value = ''
    }

    return (
        <section className={isActive ? activeStyle : inactiveStyle}>
            <header className='flex z-10 items-center justify-between shadow-xl bg-gray-950 backdrop-blur pb-2'>
                <button
                    className='p-3 rounded-lg bg-indigo-800/20 hover:bg-indigo-700/20 duration-150 w-8 h-8 flex md:hidden items-center justify-center'
                    onClick={() => handlePrevius(0)}
                >{'<'}</button>
                <div>XXX</div>
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

            <form action={submitForm} className='gap-x-3 flex w-full bg-gray-950 p-4 md:pb-0'>
                <textarea
                    className='textInput rounded-lg h-12'
                    placeholder='Type your message'
                    name='message'
                    ref={inputRef}
                ></textarea>

                <button
                    type='submit'
                    disabled={pending}
                    className='text-slate-100 bg-indigo-800 p-4 rounded-full'>
                    {pending ? '...' : 'Send'}
                </button>
            </form>

        </section>
    )
}
