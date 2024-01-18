'use client'
import React, { LegacyRef, useEffect, useRef, useState } from 'react'

export default function useVideo() {
    const videoRef = useRef<LegacyRef<HTMLVideoElement> | undefined>()
    const [error, setError] = useState({ state: false, msg: '' })
    // const [stream, setStream] = useState<MediaStream | null>(null)

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then((currentStream) => {
                // setStream(currentStream)
                if (videoRef.current) (videoRef.current as any).srcObject = currentStream
            })
            .catch((err: any) => {
                console.log(err)
                setError({ state: true, msg: 'Impossible de se connecter à la caméra' })
            })
    }, [])

    return {
        videoRef,
        error,
        // stream
    }
}
