import React from 'react'

export default function PrimaryButton({ text }: { text?: string }) {
    return (
        <button className='primaryBtn'>{text ?? 'Sign In'}</button>
    )
}
