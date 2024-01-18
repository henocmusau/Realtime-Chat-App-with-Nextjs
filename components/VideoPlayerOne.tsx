'use client'
import useVideo from '@/hooks/useVideoPlayer'
import React from 'react'

export default function VideoPlayerOne() {
    const { videoRef, error } = useVideo()
    return (
        <>
            {error.state ? <p className='p-3 my-3 text-lg font-normal rounded-lg bg-red-200'>Une erreur est survenur : {error.msg}</p> : null}
            <video playsInline autoPlay muted ref={videoRef} className='min-w-[500px] h-[80vh] aspect-video rounded-lg shadow-md' />
        </>
    )
}
