'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function useWebcam() {
    const videoRef = useRef<any>(null)
    // const videoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const photoRef = useRef<HTMLImageElement>(null)
    const [error, setError] = useState({ state: false, msg: '' })
    // const [stream, setStream] = useState<MediaStream | null>(null)

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                // setStream(currentStream)
                if (videoRef.current) videoRef.current.srcObject = currentStream
            })
            .catch((err: any) => {
                // throw new Error(err)
                // console.log(err)
                setError({ state: true, msg: 'Impossible de se connecter à la caméra' })
            })
    }, [])

    const clearphoto = () => {
        const context = canvasRef?.current?.getContext("2d") ?? null
        if (!context) return
        context.fillStyle = "#AAA";
        if (!canvasRef.current) return
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        const data = canvasRef.current.toDataURL("image/png");

        if (!photoRef.current) return
        photoRef.current.setAttribute("src", data);
    }

    const width = 320; // We will scale the photo width to this
    let height = videoRef.current ? videoRef.current.videoHeight / (videoRef.current.videoWidth / width) : 0

    const takePicture = () => {
        const context = canvasRef?.current?.getContext("2d") ?? null
        if (width && height && canvasRef.current && context && photoRef.current) {
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            context.drawImage(videoRef.current, 0, 0, width, height);

            const data = canvasRef.current.toDataURL("image/png");
            photoRef.current.setAttribute("src", data);
        } else {
            // clearphoto();
        }
    }

    return {
        videoRef,
        error,
        photoRef,
        canvasRef,
        takePicture
        // stream
    }
}
