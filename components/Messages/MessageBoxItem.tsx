import React, { RefObject } from 'react'

interface Props {
    fromMe: boolean
    message: string
    lastMessageRef: (node: HTMLDivElement) => void
    isLastMessage: boolean
}

export default function MessageBoxItem({ fromMe, message, lastMessageRef, isLastMessage }: Props) {
    const defaultStyle = 'w-auto max-w-[85%] rounded-lg text-slate-200 p-4 mb-3 text-normal shadow-inner'
    const fromMeStyle = defaultStyle + ' float-right bg-indigo-800/20'
    const fromOtherStyle = defaultStyle + ' bg-gradient-to-br from-violet-800 to-violet-950 float-left'

    return (
        <div className='w-full' ref={isLastMessage ? lastMessageRef : null}>
            <p
                className={fromMe ? fromMeStyle : fromOtherStyle}
            >
                {message}
            </p>
            {/* <span className={fromMe ? 'block float-right text-[0.65rem]' : 'block'}>{'12/10/2026'}</span> */}
        </div>
    )
}
