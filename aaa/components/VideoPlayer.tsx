'use client'
import useVideo from '@/hooks/useVideo'
import useWebcam from '@/hooks/useWebcam'
import React from 'react'

export default function VideoPlayer() {
    const { videoRef, error } = useWebcam()
    return (
        <section className='h-full w-full flex-col flex items-center justify-center'>
            {error.state ? <p className='p-3 my-3 text-lg font-normal rounded-lg bg-red-200'>Une erreur est survenur : {error.msg}</p> : null}
            <h2 className='font-semibold text-2xl mb-4'>My video Player</h2>
            <video playsInline autoPlay muted ref={videoRef} className='min-w-[400px] h-[60vh] aspect-video rounded-lg shadow-md' />
        </section>
    )
}
