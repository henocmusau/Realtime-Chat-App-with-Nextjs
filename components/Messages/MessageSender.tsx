import Image from 'next/image'
import React from 'react'

import user from '@/assets/images/user.jpg'

export default function MessageSender() {
    const text = "Shell est un interpréteur de commande qui permet d'accéder"
    return (
        <div className='flex items-center mb-5 last:mb-0'>
            <Image
                src={user}
                className='w-12 h-12 mr-4 rounded-full object-cover hover:contrast-125 duration-150'
                alt='User Profile picture' />
            <div>
                <h2 className='font-semibold'>John Doe</h2>
                <p className='text-slate-600 text-sm'>{text.slice(22) + '...'}</p>
            </div>
        </div>
    )
}
