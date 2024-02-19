import React from 'react'

interface Props {
    fromMe: boolean
}

export default function MessageBoxItem({ fromMe }: Props) {
    const defaultStyle = 'max-w-[85%] rounded-lg text-slate-200 p-4 mb-3 text-normal shadow-inner'
    const fromMeStyle = defaultStyle + ' float-right bg-indigo-800/20'
    const fromOtherStyle = defaultStyle + ' bg-gradient-to-br from-violet-800 to-violet-950'

    return (
        <div className='w-full'>
            <p
                className={fromMe ? fromMeStyle : fromOtherStyle}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eum exercitationem accusantium sapiente laboriosam beatae temporibus dolorem esse, illum iusto architecto iste cupiditate id tempora maiores eveniet, cumque ex nisi.
            </p>
            {/* <span className={fromMe ? 'block float-right text-[0.65rem]' : 'block'}>{'12/10/2026'}</span> */}
        </div>
    )
}
