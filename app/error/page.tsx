import React from 'react'
import { getUser } from '../(auth)/actions'
import { redirect } from 'next/navigation'

export default function Error({ searchParams }: { searchParams: { msg?: string } }) {

    return (
        <div className='bg-transparent text-white text-center max-w-md mx-auto w-full'>
            <h2 className='title__1'>Error ! Something went wrong.</h2>
            <p>
                {searchParams.msg ?? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nihil inventore accusantium debitis numquam molestiae laboriosam, corrupti, fugit explicabo cupiditate doloribus perferendis delectus, repellat quis! Perspiciatis dolor voluptas sed laboriosam?"}
            </p>
        </div>
    )
}
